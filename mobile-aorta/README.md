# AORTA Mobile - Career Guidance App

A mobile-optimized Progressive Web App (PWA) for AI-powered career guidance, designed specifically for Android devices.

## Features

- 🧠 **AI Career Quiz** - Personalized career recommendations
- 🗺️ **Roadmap Generator** - Step-by-step career planning
- 📊 **SWOT Analysis** - Strengths, weaknesses, opportunities, and threats analysis
- 🤖 **AI Mentor Chat** - 24/7 AI career guidance
- 🎓 **College Directory** - Find the perfect college
- 📚 **Exam Guide** - Entrance exam preparation
- 📱 **Mobile-First Design** - Optimized for Android screens
- ⚡ **PWA Support** - Installable on mobile devices
- 🌐 **Offline Support** - Works without internet connection

## Quick Start Guide

### Option 1: Run Development Server (Recommended)

1. **Navigate to the mobile directory:**
   ```bash
   cd mobile-aorta
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access on your phone:**
   - The server will start on `http://localhost:3001`
   - Find your computer's IP address (e.g., `192.168.1.100`)
   - Open `http://192.168.1.100:3001` on your Android phone
   - Make sure both devices are on the same WiFi network

### Option 2: Build and Deploy

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

3. **Deploy to a hosting service:**
   - Upload the `dist` folder to any static hosting service
   - Examples: Netlify, Vercel, GitHub Pages, Firebase Hosting

## Mobile Access Instructions

### For Android Phones:

1. **Open Chrome browser** on your Android phone
2. **Navigate to the app URL** (development or deployed)
3. **Add to Home Screen:**
   - Tap the menu (3 dots) in Chrome
   - Select "Add to Home screen" or "Install app"
   - Follow the prompts to install

4. **Launch the app** from your home screen like a native app

### PWA Features:

- **Offline Support** - Works without internet
- **App-like Experience** - Full screen, no browser UI
- **Push Notifications** - Get career tips and updates
- **Fast Loading** - Optimized for mobile performance

## Development

### Tech Stack:
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **PWA Plugin** - Progressive Web App features

### Project Structure:
```
mobile-aorta/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── package.json       # Dependencies
└── vite.config.ts     # Build configuration
```

### Available Scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Mobile Optimization Features

### Design:
- **Touch-friendly** - Large buttons and touch targets
- **Swipe gestures** - Natural mobile interactions
- **Responsive layout** - Adapts to different screen sizes
- **Dark theme** - Easy on the eyes

### Performance:
- **Lazy loading** - Load content as needed
- **Image optimization** - Compressed assets
- **Code splitting** - Smaller bundle sizes
- **Caching** - Offline functionality

### User Experience:
- **Bottom navigation** - Easy thumb access
- **Pull-to-refresh** - Familiar mobile pattern
- **Haptic feedback** - Touch response
- **Smooth animations** - 60fps transitions

## Troubleshooting

### Common Issues:

1. **Can't access from phone:**
   - Check firewall settings
   - Ensure both devices are on same network
   - Try using your computer's IP address instead of localhost

2. **PWA not installing:**
   - Use Chrome browser
   - Ensure HTTPS (for production)
   - Check manifest.json is accessible

3. **App not working offline:**
   - Clear browser cache
   - Reinstall the PWA
   - Check service worker registration

## Support

For issues or questions:
- Email: support@aorta-mobile.com
- Phone: +91 98765 43210
- Live Chat: Available in the app

## License

MIT License - Feel free to use and modify for your needs.












