# Portfolio Website

A personal portfolio site built with React, Vite, and Tailwind CSS.

**Live:** https://hein-zaw-portfolio.vercel.app

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view it.

## Customizing

All personal content lives in one place: [src/data.js](src/data.js).
Edit `profile`, `skills`, and `projects` there — the rest of the site
updates automatically.

- Replace `profile.name`, `role`, `about`, `email`, `phone`, `github`,
  `linkedin`, `headshotUrl`, `resumeUrl`.
- Add your real projects (title, description, tags, `caseStudy`) to
  `projects`. Set `comingSoon: true` instead of `caseStudy` for a
  placeholder card that isn't linked yet.
- Update `skills` with the languages/tools you actually use.
- Drop a resume PDF and headshot photo into `public/` and `public/assets/`
  matching the paths in `profile.resumeUrl` / `profile.headshotUrl`.

Section components are in [src/components](src/components) if you want to
change layout or styling (colors and the type scale are set in
[tailwind.config.js](tailwind.config.js)).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to Vercel, Netlify, GitHub
Pages, or any static host.

## Deployment

This repo is connected to Vercel — every push to `master` auto-deploys to
production. To deploy manually instead: `npx vercel --prod`.

### Deploying to GitHub Pages (alternative)

1. `npm install -D gh-pages`
2. Add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. `npm run deploy`
