#!/bin/bash

echo "========================================"
echo "   AORTA Mobile - Quick Start Setup"
echo "========================================"
echo

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "   Make sure you're in the mobile-aorta directory"
    echo "   Run: cd mobile-aorta"
    exit 1
fi

echo "✅ Found package.json - we're in the right directory"
echo

# Check Node.js
echo "🔍 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found! Please install Node.js first"
    echo "   Download from: https://nodejs.org/"
    echo "   Choose the LTS version"
    exit 1
else
    echo "✅ Node.js is installed"
fi

# Check npm
echo "🔍 Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found! Please install npm first"
    exit 1
else
    echo "✅ npm is installed"
fi

echo
echo "🧹 Cleaning up any existing installation..."
rm -rf node_modules package-lock.json

echo
echo "📦 Installing dependencies..."
echo "   This may take a few minutes..."
npm install

if [ $? -ne 0 ]; then
    echo
    echo "❌ Installation failed! Trying alternative method..."
    echo
    echo "🔄 Trying with --legacy-peer-deps..."
    npm install --legacy-peer-deps
    
    if [ $? -ne 0 ]; then
        echo
        echo "❌ Still failed. Trying with --force..."
        npm install --force
        
        if [ $? -ne 0 ]; then
            echo
            echo "❌ Installation failed completely!"
            echo "   Please check your internet connection and try again"
            echo "   Or try installing Node.js from: https://nodejs.org/"
            exit 1
        fi
    fi
fi

echo
echo "✅ Dependencies installed successfully!"
echo

echo "🚀 Starting the development server..."
echo
echo "========================================"
echo "   IMPORTANT INSTRUCTIONS:"
echo "========================================"
echo
echo "1. The server will start on http://localhost:3001"
echo "2. To access on your phone:"
echo "   - Find your computer's IP address (run: ifconfig or ip addr)"
echo "   - Open Chrome on your phone"
echo "   - Go to http://YOUR_IP:3001"
echo "   - Example: http://192.168.1.100:3001"
echo
echo "3. To install as app on phone:"
echo "   - In Chrome, tap menu (3 dots)"
echo "   - Select 'Add to Home screen'"
echo
echo "========================================"
echo

npm run dev












