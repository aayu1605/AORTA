#!/bin/bash

echo "🚀 Setting up AORTA Mobile..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete! You can now start the mobile app:"
echo ""
echo "   npm run dev"
echo ""
echo "📱 To access on your Android phone:"
echo "   1. Find your computer's IP address"
echo "   2. Open Chrome on your phone"
echo "   3. Go to http://YOUR_IP:3001"
echo "   4. Install as PWA from Chrome menu"
echo ""
echo "🌐 Example: http://192.168.1.100:3001"
echo ""
echo "Happy coding! 🚀"












