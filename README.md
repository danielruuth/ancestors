# Ancestors static site (Vite + Vercel)

This repository wraps an existing static HTML family-ancestry site with a Vite toolchain so it can be served locally and deployed to Vercel.

## Prerequisites
- Node.js 20+
- npm 9+

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Vite dev server:
   ```bash
   npm run dev
   ```
3. Open the URL printed in the terminal (for example `http://localhost:5173`). You will be redirected to the legacy `index.htm` entry point served from Vite's static assets.

## Production build
Build the static site into the `dist` folder:
```bash
npm run build
```
You can preview the built assets locally with:
```bash
npm run preview
```

## Deployment to Vercel
The included `vercel.json` config sets the build command to `npm run build` and the output directory to `dist`. After pushing to a Git repository connected to Vercel:
1. Create a new Vercel project and import the repository.
2. Accept the detected settings (or ensure the build command/output match the config).
3. Deploy—the generated `dist` folder will be served, with the root `index.html` redirecting to the legacy `index.htm` frameset.
