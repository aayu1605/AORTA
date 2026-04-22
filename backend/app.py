from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import json
import smtplib
import time
import uuid
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from notifications import bp as notifications_bp
import requests
import boto3
from botocore.exceptions import ClientError, NoCredentialsError, PartialCredentialsError

app = Flask(__name__)
CORS(app)
app.register_blueprint(notifications_bp, url_prefix='/api/v1')

# Bedrock client will be initialized in call_bedrock function

def call_bedrock(prompt: str, max_tokens: int = 800) -> str:
    """Helper function to call Amazon Bedrock with Claude model"""
    print(f"🔍 Attempting to call Bedrock with prompt: {prompt[:100]}...")
    try:
        # Use bedrock-runtime for invoke_model
        runtime_client = boto3.client(
            'bedrock-runtime',
            region_name='us-east-1'
        )
        
        print("🔍 Created Bedrock runtime client, calling invoke_model...")
        response = runtime_client.invoke_model(
            modelId='anthropic.claude-3-haiku-20240307-v1:0',
            contentType='application/json',
            accept='application/json',
            body=json.dumps({
                'anthropic_version': 'bedrock-2023-05-31',
                'max_tokens': max_tokens,
                'messages': [{'role': 'user', 'content': prompt}]
            })
        )
        
        print("🔍 Got response from Bedrock, parsing...")
        response_body = json.loads(response.get('body').read())
        result = response_body.get('content', [{}])[0].get('text', '')
        print(f"✅ Bedrock response: {result[:200]}...")
        return result
        
    except NoCredentialsError:
        print("❌ AWS credentials not found or invalid")
        raise Exception("AWS credentials not configured properly")
    except PartialCredentialsError:
        print("❌ Incomplete AWS credentials")
        raise Exception("Incomplete AWS credentials")
    except ClientError as e:
        error_code = e.response['Error']['Code']
        error_msg = e.response['Error']['Message']
        print(f"❌ Bedrock ClientError: {error_code} - {error_msg}")
        raise Exception(f"AWS Bedrock error: {error_code} - {error_msg}")
    except Exception as e:
        print(f"❌ Unexpected Bedrock error: {e}")
        raise Exception(f"Unexpected error calling Bedrock: {str(e)}")

# Sample colleges data - replace with real database
COLLEGES_DATA = [
    {
        "id": "1",
        "name": "Indian Institute of Technology Madras",
        "state": "Tamil Nadu",
        "city": "Chennai",
        "type": "IIT",
        "nirfRank": 1,
        "fees": {"min": 200000, "max": 250000, "currency": "INR"},
        "courses": ["B.Tech Computer Science", "B.Tech Electronics", "B.Tech Mechanical", "B.Tech Civil", "B.Tech Chemical"],
        "established": 1959,
        "website": "https://www.iitm.ac.in",
        "contact": {"phone": "+91-44-2257-8280", "email": "info@iitm.ac.in"},
        "facilities": ["Hostel", "Library", "Sports Complex", "Medical Center", "Cafeteria"],
        "placement": {
            "averagePackage": 1500000,
            "highestPackage": 5000000,
            "topRecruiters": ["Google", "Microsoft", "Amazon", "Apple", "Meta"]
        },
        "admission": {
            "entranceExams": ["JEE Advanced"],
            "cutoff": {"general": 95, "obc": 90, "sc": 85, "st": 80}
        }
    },
    {
        "id": "2",
        "name": "Indian Institute of Technology Delhi",
        "state": "Delhi",
        "city": "New Delhi",
        "type": "IIT",
        "nirfRank": 2,
        "fees": {"min": 200000, "max": 250000, "currency": "INR"},
        "courses": ["B.Tech Computer Science", "B.Tech Electronics", "B.Tech Mechanical", "B.Tech Civil"],
        "established": 1961,
        "website": "https://www.iitd.ac.in",
        "contact": {"phone": "+91-11-2659-7135", "email": "info@iitd.ac.in"},
        "facilities": ["Hostel", "Library", "Sports Complex", "Medical Center", "Cafeteria"],
        "placement": {
            "averagePackage": 1400000,
            "highestPackage": 4500000,
            "topRecruiters": ["Google", "Microsoft", "Amazon", "Apple", "Meta"]
        },
        "admission": {
            "entranceExams": ["JEE Advanced"],
            "cutoff": {"general": 94, "obc": 89, "sc": 84, "st": 79}
        }
    }
]

@app.get('/health')
def health():
    return jsonify(status='ok')

@app.get('/api/v1/colleges')
def colleges():
    state = request.args.get('state')
    course = request.args.get('course')
    max_fees = request.args.get('max_fees', type=int)
    nirf_rank = request.args.get('nirf_rank', type=int)
    
    filtered_colleges = COLLEGES_DATA.copy()
    
    if state:
        filtered_colleges = [c for c in filtered_colleges if c['state'] == state]
    
    if course:
        filtered_colleges = [c for c in filtered_colleges if any(course.lower() in c_course.lower() for c_course in c['courses'])]
    
    if max_fees:
        filtered_colleges = [c for c in filtered_colleges if c['fees']['max'] <= max_fees]
    
    if nirf_rank:
        filtered_colleges = [c for c in filtered_colleges if c['nirfRank'] <= nirf_rank]
    
    return jsonify(filtered_colleges)

@app.get('/api/v1/colleges/<college_id>')
def college_details(college_id):
    college = next((c for c in COLLEGES_DATA if c['id'] == college_id), None)
    if college:
        return jsonify(college)
    return jsonify({'error': 'College not found'}), 404

@app.get('/api/v1/careers')
def careers():
    return jsonify([
        {"id": "1", "name": "Software Engineer", "category": "Technology", "description": "Develop software applications and systems"},
        {"id": "2", "name": "Data Scientist", "category": "Technology", "description": "Analyze data to extract insights and build models"},
        {"id": "3", "name": "Doctor", "category": "Medical", "description": "Diagnose and treat patients"},
        {"id": "4", "name": "Teacher", "category": "Education", "description": "Educate students in various subjects"},
        {"id": "5", "name": "Business Analyst", "category": "Business", "description": "Analyze business processes and recommend improvements"}
    ])

@app.post('/api/v1/roadmap/generate')
def generate_roadmap():
    data = request.get_json(force=True, silent=True) or {}
    
    career_goal = data.get('career_goal', 'Your Goal')
    current_level = data.get('current_level', 'beginner')
    timeline = data.get('timeline', '12 months')
    
    # Generate AI-powered roadmap using Bedrock
    prompt = f"""Create a personalized career roadmap for a student who wants to become {career_goal}.
    
Current level: {current_level}
Timeline: {timeline}

Please provide a structured roadmap with:
1. Foundation phase (first 3-4 months)
2. Development phase (middle period)  
3. Advancement phase (final months)

For each phase, include:
- Clear title and duration
- 4-6 specific, actionable tasks
- Focus on Indian education system context
- Include practical skills, certifications, and milestones

Format as JSON with this structure:
{{
  "name": "Career Roadmap for {career_goal}",
  "description": "Personalized career development plan",
  "steps": [
    {{
      "id": "foundation",
      "title": "Foundation Phase (Months 1-4)",
      "description": "Build strong fundamentals",
      "duration": "4 months",
      "tasks": ["task1", "task2", "task3", "task4"]
    }},
    {{
      "id": "development", 
      "title": "Development Phase (Months 5-8)",
      "description": "Specialize and gain experience",
      "duration": "4 months",
      "tasks": ["task1", "task2", "task3", "task4"]
    }},
    {{
      "id": "advancement",
      "title": "Advancement Phase (Months 9-12)", 
      "description": "Achieve career goals",
      "duration": "4 months",
      "tasks": ["task1", "task2", "task3", "task4"]
    }}
  ]
}}

Be specific, practical, and encouraging. Focus on Indian context."""
    
    try:
        ai_response = call_bedrock(prompt, max_tokens=1200)
        # Try to parse as JSON, fallback to structured format if needed
        try:
            roadmap = json.loads(ai_response)
        except json.JSONDecodeError:
            # Fallback to basic structure if AI response is not valid JSON
            roadmap = {
                "name": f"Career Roadmap for {career_goal}",
                "description": "Personalized career development plan",
                "steps": [
                    {
                        "id": "foundation",
                        "title": "Foundation Phase (Months 1-4)",
                        "description": "Build strong fundamentals",
                        "duration": "4 months",
                        "tasks": ["Master core subjects", "Develop essential skills", "Build portfolio", "Network with professionals"]
                    },
                    {
                        "id": "development",
                        "title": "Development Phase (Months 5-8)",
                        "description": "Specialize and gain experience",
                        "duration": "4 months",
                        "tasks": ["Complete advanced courses", "Gain practical experience", "Build professional network", "Prepare for career transition"]
                    },
                    {
                        "id": "advancement",
                        "title": "Advancement Phase (Months 9-12)",
                        "description": "Achieve career goals",
                        "duration": "4 months",
                        "tasks": ["Apply for target positions", "Continue skill development", "Mentor others", "Plan long-term career growth"]
                    }
                ]
            }
        return jsonify(roadmap)
        
    except Exception as e:
        print(f"❌ Roadmap generation error: {e}")
        # Fallback to static roadmap if AI fails
        roadmap = {
            "name": f"Career Roadmap for {career_goal}",
            "description": "Personalized career development plan",
            "steps": [
                {
                    "id": "foundation",
                    "title": "Foundation Phase (Months 1-4)",
                    "description": "Build strong fundamentals",
                    "duration": "4 months",
                    "tasks": ["Master core subjects", "Develop essential skills", "Build portfolio", "Network with professionals"]
                },
                {
                    "id": "development",
                    "title": "Development Phase (Months 5-8)",
                    "description": "Specialize and gain experience",
                    "duration": "4 months",
                    "tasks": ["Complete advanced courses", "Gain practical experience", "Build professional network", "Prepare for career transition"]
                },
                {
                    "id": "advancement",
                    "title": "Advancement Phase (Months 9-12)",
                    "description": "Achieve career goals",
                    "duration": "4 months",
                    "tasks": ["Apply for target positions", "Continue skill development", "Mentor others", "Plan long-term career growth"]
                }
            ]
        }
        return jsonify(roadmap)

@app.post('/api/v1/quiz/submit')
def submit_quiz():
    data = request.get_json(force=True, silent=True) or {}
    
    # Process quiz results and generate recommendations
    recommendations = {
        "career_paths": [
            {
                "title": "Technology & Engineering",
                "match_score": 85,
                "description": "Based on your interests in problem-solving and technology"
            },
            {
                "title": "Science & Research",
                "match_score": 70,
                "description": "Your analytical thinking suggests research potential"
            }
        ],
        "next_steps": [
            "Take advanced courses in your chosen field",
            "Build practical projects",
            "Network with professionals",
            "Consider internships or apprenticeships"
        ]
    }

    # Persist user talent / quiz data to local JSON storage
    try:
        data_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data'))
        os.makedirs(data_dir, exist_ok=True)
        quiz_file = os.path.join(data_dir, 'quiz_results.json')

        if os.path.exists(quiz_file):
            with open(quiz_file, 'r', encoding='utf-8') as f:
                existing = json.load(f)
                if not isinstance(existing, list):
                    existing = []
        else:
            existing = []

        existing.append({
            "id": str(uuid.uuid4()),
            "createdAt": int(time.time()),
            "rawQuizPayload": data,
            "recommendations": recommendations,
        })

        with open(quiz_file, 'w', encoding='utf-8') as f:
            json.dump(existing, f, ensure_ascii=False, indent=2)
    except Exception as e:
        # Log but do not fail the API response for storage issues
        print(f"Error saving quiz data locally: {e}")

    return jsonify(recommendations)

@app.post('/api/v1/chat')
def chat():
    data = request.get_json(force=True, silent=True) or {}
    message = (data.get('message') or '').strip()
    messages = data.get('messages') or []  # optional full history

    if not message and not messages:
        return jsonify({"reply": "Please type a question or topic you'd like help with."})

    # Temporarily disable Bedrock due to payment issue - use enhanced fallback
    message_lower = message.lower()
    
    # JEE related responses
    if 'jee' in message_lower or 'joint entrance' in message_lower:
        if 'subject' in message_lower or 'prepare' in message_lower:
            return jsonify({"reply": "For JEE preparation, you need to focus on three main subjects: Physics, Chemistry, and Mathematics. Physics is most weightage (40%), followed by Chemistry (30%), and Mathematics (30%). Start with strong basics and practice previous year papers regularly."})
        elif 'syllabus' in message_lower or 'pattern' in message_lower:
            return jsonify({"reply": "JEE Main syllabus includes: Physics (Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics), Chemistry (Physical, Organic, Inorganic), and Mathematics (Algebra, Calculus, Coordinate Geometry, Trigonometry). Focus on NCERT books first."})
        else:
            return jsonify({"reply": "JEE is one of India's toughest entrance exams. Key tips: Start early, focus on concepts, practice regularly, take mock tests, and analyze your mistakes. Would you like specific study guidance for any subject?"})
    
    # Career guidance responses
    elif 'career' in message_lower or 'future' in message_lower:
        if '10th' in message_lower or 'class 10' in message_lower:
            return jsonify({"reply": "After 10th, you have great options: Science (PCM/PCB), Commerce, Arts. Based on your interests, choose wisely. Science opens engineering/medical fields, Commerce opens CA/business fields, Arts opens creative/humanities fields."})
        elif '12th' in message_lower or 'class 12' in message_lower:
            return jsonify({"reply": "After 12th, consider your stream: Science students can target JEE/NEET, Commerce students can aim for CA/CS, Arts students can prepare for UPSC/Civil Services. Start preparing early!"})
    
    # General educational guidance
    elif 'study' in message_lower or 'how to' in message_lower:
        return jsonify({"reply": "Effective study tips: 1) Make a schedule, 2) Focus on concepts not rote learning, 3) Practice regularly, 4) Take breaks, 5) Stay healthy. Would you like subject-specific tips?"})
    
    # Default fallback
    else:
        return jsonify({"reply": f"I understand you're asking about: {message}. I'm here to help with careers, exams, colleges, and study guidance. Could you provide more details about your class (10th/12th) and interests so I can give better advice?"})

@app.post('/api/v1/contact')
def contact():
    data = request.get_json(force=True, silent=True) or {}
    
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    subject = data.get('subject', '').strip()
    message = data.get('message', '').strip()
    
    if not all([name, email, subject, message]):
        return jsonify({'error': 'All fields are required'}), 400
    
    # Email configuration
    smtp_server = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', 587))
    smtp_email = os.environ.get('SMTP_EMAIL', 'aorta4747@gmail.com')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    recipient_email = 'aorta4747@gmail.com'
    
    if not smtp_password:
        # If no password is set, log the request instead
        print(f"Contact form submission (email not configured):")
        print(f"From: {name} <{email}>")
        print(f"Subject: {subject}")
        print(f"Message: {message}")
        return jsonify({'message': 'Contact form received (email not configured)'}), 200
    
    try:
        # Create email
        msg = MIMEMultipart()
        msg['From'] = smtp_email
        msg['To'] = recipient_email
        msg['Subject'] = subject
        msg['Reply-To'] = email
        
        # Format email body as requested
        body = f"I {name}, want to know about {subject}.\n\n{message}"
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_email, smtp_password)
            server.send_message(msg)
        
        return jsonify({'message': 'Email sent successfully'}), 200
    
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({'error': 'Failed to send email', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8000)))
