@echo off
echo 🚀 Setting up AORTA Mobile...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🎉 Setup complete! You can now start the mobile app:
echo.
echo    npm run dev
echo.
echo 📱 To access on your Android phone:
echo    1. Find your computer's IP address (run: ipconfig)
echo    2. Open Chrome on your phone
echo    3. Go to http://YOUR_IP:3001
echo    4. Install as PWA from Chrome menu
echo.
echo 🌐 Example: http://192.168.1.100:3001
echo.
echo Happy coding! 🚀
pause












