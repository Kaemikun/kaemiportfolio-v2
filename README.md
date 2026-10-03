# Portfolio

A software engineer portfolio built with React, Vite, TypeScript, Tailwind, and Three.js. Features an interactive terminal, a 3D particle hero, a custom cursor, and live GitHub stats.

## Make it yours

Almost everything on the page comes from one file:

```
src/data/profile.ts
```

Edit your name, tagline, bio, skills, experience, projects, social links, and GitHub username there. No other files need to change for basic content updates.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. The dev server has hot reload.

## Build

```bash
npm run build   # type-checks, then builds to dist/
npm run preview # serve the production build locally
```

## Deploy (Vercel)

This project is zero-config on Vercel (static Vite build).

```bash
npx vercel        # first run: log in + link the project
npx vercel --prod  # ship to production
```

After the first `vercel` run, subsequent deploys just need `vercel --prod`. To attach a custom domain, use the Vercel dashboard or `vercel domains add <domain>`.

## Interactive terminal

Click "open terminal" in the nav (or "Try the terminal" in the hero). Type `help` for a list of commands. Commands live in `src/components/Terminal/commands.ts` if you want to add your own.
