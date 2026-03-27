@echo off
echo ========================================
echo    AORTA Mobile - Quick Start Setup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found!
    echo    Make sure you're in the mobile-aorta directory
    echo    Run: cd mobile-aorta
    pause
    exit /b 1
)

echo ✅ Found package.json - we're in the right directory
echo.

REM Check Node.js
echo 🔍 Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found! Please install Node.js first
    echo    Download from: https://nodejs.org/
    echo    Choose the LTS version
    pause
    exit /b 1
) else (
    echo ✅ Node.js is installed
)

REM Check npm
echo 🔍 Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not found! Please install npm first
    pause
    exit /b 1
) else (
    echo ✅ npm is installed
)

echo.
echo 🧹 Cleaning up any existing installation...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo.
echo 📦 Installing dependencies...
echo    This may take a few minutes...
npm install

if %errorlevel% neq 0 (
    echo.
    echo ❌ Installation failed! Trying alternative method...
    echo.
    echo 🔄 Trying with --legacy-peer-deps...
    npm install --legacy-peer-deps
    
    if %errorlevel% neq 0 (
        echo.
        echo ❌ Still failed. Trying with --force...
        npm install --force
        
        if %errorlevel% neq 0 (
            echo.
            echo ❌ Installation failed completely!
            echo    Please check your internet connection and try again
            echo    Or try installing Node.js from: https://nodejs.org/
            pause
            exit /b 1
        )
    )
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo 🚀 Starting the development server...
echo.
echo ========================================
echo    IMPORTANT INSTRUCTIONS:
echo ========================================
echo.
echo 1. The server will start on http://localhost:3001
echo 2. To access on your phone:
echo    - Find your computer's IP address (run: ipconfig)
echo    - Open Chrome on your phone
echo    - Go to http://YOUR_IP:3001
echo    - Example: http://192.168.1.100:3001
echo.
echo 3. To install as app on phone:
echo    - In Chrome, tap menu (3 dots)
echo    - Select "Add to Home screen"
echo.
echo ========================================
echo.

npm run dev












