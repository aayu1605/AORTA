# 🔧 AORTA Mobile - Troubleshooting Guide

## Quick Setup Steps

### Step 1: Verify Prerequisites
```bash
# Check if Node.js is installed
node --version
# Should show something like v18.x.x or v20.x.x

# Check if npm is installed
npm --version
# Should show something like 9.x.x or 10.x.x
```

**If Node.js is not installed:**
- Download from: https://nodejs.org/
- Choose the LTS version
- Install and restart your terminal

### Step 2: Navigate to Mobile Directory
```bash
# Make sure you're in the correct directory
cd mobile-aorta

# Verify you're in the right place
ls
# Should show: package.json, src/, public/, etc.
```

### Step 3: Install Dependencies
```bash
# Clear any existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

**Expected output:**
```
  VITE v7.1.2  ready in 500 ms

  ➜  Local:   http://localhost:3001/
  ➜  Network: http://192.168.1.100:3001/
  ➜  press h to show help
```

## Common Issues & Solutions

### Issue 1: "Command not found: npm"
**Solution:**
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt
- Try again

### Issue 2: "Cannot find module" errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: Port 3001 already in use
**Solution:**
```bash
# Kill process using port 3001
# On Windows:
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# On Mac/Linux:
lsof -ti:3001 | xargs kill -9

# Or use a different port
npm run dev -- --port 3002
```

### Issue 4: "Permission denied" errors
**Solution:**
```bash
# On Mac/Linux, fix permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) node_modules

# Or run with sudo (not recommended)
sudo npm install
```

### Issue 5: Website not loading on phone
**Solution:**
1. **Check firewall settings:**
   - Windows: Allow Node.js through Windows Firewall
   - Mac: System Preferences > Security & Privacy > Firewall

2. **Find correct IP address:**
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   # or
   ip addr
   ```

3. **Use the Network URL:**
   - Look for "Network: http://192.168.x.x:3001/" in the terminal output
   - Use this URL on your phone

4. **Check network connection:**
   - Ensure both devices are on the same WiFi network
   - Try turning off mobile data on your phone

### Issue 6: PWA not installing
**Solution:**
1. Use Chrome browser on Android
2. Make sure you're using HTTPS (for production) or localhost (for development)
3. Check if manifest.json is accessible: `http://localhost:3001/manifest.json`

## Alternative Setup Methods

### Method 1: Using Yarn (if npm fails)
```bash
# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Start server
yarn dev
```

### Method 2: Using pnpm
```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Start server
pnpm dev
```

### Method 3: Manual Setup
```bash
# 1. Install dependencies one by one
npm install react@^19.1.1
npm install react-dom@^19.1.1
npm install react-router-dom@^7.9.1
npm install lucide-react@^0.263.1
npm install framer-motion@^10.16.4

# 2. Install dev dependencies
npm install --save-dev @vitejs/plugin-react@^5.0.0
npm install --save-dev vite@^7.1.2
npm install --save-dev typescript@~5.8.3
npm install --save-dev tailwindcss@^3.4.17
npm install --save-dev vite-plugin-pwa@^0.17.4

# 3. Start server
npm run dev
```

## Testing the Setup

### Test 1: Check if server starts
```bash
npm run dev
# Should show: "Local: http://localhost:3001/"
```

### Test 2: Open in browser
- Go to http://localhost:3001
- Should see AORTA Mobile homepage

### Test 3: Check mobile access
- Find your IP address
- Open http://YOUR_IP:3001 on your phone
- Should work on mobile browser

### Test 4: Install PWA
- In Chrome on phone, tap menu (3 dots)
- Select "Add to Home screen"
- Should install as app

## Still Having Issues?

### Check these files exist:
- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `src/main.tsx`
- [ ] `src/App.tsx`
- [ ] `index.html`

### Check these commands work:
```bash
node --version
npm --version
cd mobile-aorta
npm install
npm run dev
```

### Get Help:
1. Check the terminal output for error messages
2. Try the alternative setup methods above
3. Make sure you have the latest Node.js version
4. Check if antivirus is blocking the connection

## Quick Fix Commands

```bash
# Complete reset
cd mobile-aorta
rm -rf node_modules package-lock.json
npm install
npm run dev

# If that doesn't work, try:
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run dev
```












