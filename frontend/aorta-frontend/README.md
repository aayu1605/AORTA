# AORTA Frontend

## Development

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`

## Environment Variables

Create `.env`:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Create `.env.production`:

```env
VITE_API_URL=https://your-backend-url.com/api/v1
```

## Build

`npm run build`

Output folder: `dist`

## Vercel / Netlify

Add these env vars in hosting dashboard:

- `VITE_API_URL`

For detailed steps, see `DEPLOYMENT.md`.
