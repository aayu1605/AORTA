# AORTA Deployment Guide

## Environment Variables

Set these in your hosting dashboard:

- `VITE_API_URL`
- `VITE_CLAUDE_API_KEY`

Local defaults are in `.env`.
Production defaults are in `.env.production`.

## Build Command

`npm run build`

## Output Directory

`dist`

## Vercel

1. Import project in Vercel.
2. Add env vars (`VITE_API_URL`, `VITE_CLAUDE_API_KEY`) in Project Settings -> Environment Variables.
3. Build command: `npm run build`
4. Output directory: `dist`

## Netlify

1. Import repository.
2. Add env vars in Site Settings -> Environment variables.
3. Build command: `npm run build`
4. Publish directory: `dist`
