# Portfolio Website

A personal portfolio site built with React, Vite, and Tailwind CSS.

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

- Replace `profile.name`, `role`, `tagline`, `about`, `email`, `github`,
  `linkedin`.
- Add your real projects (title, description, tags, links) to `projects`.
- Update `skills` with the languages/tools you actually use.
- If you want a downloadable resume, drop a `resume.pdf` into `public/`
  and link it from `profile.resumeUrl`.

Section components are in [src/components](src/components) if you want to
change layout or styling (colors are set via the `accent` color in
[tailwind.config.js](tailwind.config.js)).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to Vercel, Netlify, GitHub
Pages, or any static host.

## Deploying to GitHub Pages

1. `npm install -D gh-pages`
2. Add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. `npm run deploy`
