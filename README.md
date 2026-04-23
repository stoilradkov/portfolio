# Stoil Radkov Portfolio

Static portfolio site for Stoil Radkov, built to attract higher-quality contract work around dashboards, workflows, tooling, and larger web applications.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui-style component primitives
- Framer Motion for subtle motion
- lucide-react for icons

## Architecture

This project uses a Vite multi-page setup instead of a client-side router.

Why:

- It keeps GitHub Pages deployment simple and reliable.
- It gives you real static pages for the homepage and each case study.
- It avoids SPA deep-link routing issues on static hosting.

Pages:

- `/` homepage
- `/work/insurance-workflow-portal/`
- `/work/analytical-data-workspace/`
- `/work/energy-pricing-dashboard/`

## Project structure

- [`src/content/portfolio-content.ts`](/C:/Users/StoilRadkov/Training/portfolio/src/content/portfolio-content.ts) contains the main editable site content.
- [`src/components/ui`](/C:/Users/StoilRadkov/Training/portfolio/src/components/ui) contains reusable shadcn-style UI primitives.
- [`src/components/shared`](/C:/Users/StoilRadkov/Training/portfolio/src/components/shared) contains layout and section components.
- [`src/pages`](/C:/Users/StoilRadkov/Training/portfolio/src/pages) contains the homepage and case study page templates.
- [`public/assets`](/C:/Users/StoilRadkov/Training/portfolio/public/assets) contains images, placeholders, and downloadable assets.

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run build
npm run preview
```

## Editing content later

Most copy and links live in [`src/content/portfolio-content.ts`](/C:/Users/StoilRadkov/Training/portfolio/src/content/portfolio-content.ts).

Update these areas there:

- hero headline, intro text, and CTAs
- contact links and email
- services
- technical strengths
- process steps
- experience highlights
- project summaries and case study details

## GitHub Pages deployment

The repo already includes [`deploy.yml`](/C:/Users/StoilRadkov/Training/portfolio/.github/workflows/deploy.yml).

Deployment steps:

1. Push this project to GitHub.
2. In the repository settings, open `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Push to `master` or `main`, or run the workflow manually from the Actions tab.

Base path handling:

- If the repo is a project repo like `https://github.com/<user>/<repo>`, the build automatically uses `/<repo>/`.
- If the repo is a user site like `<user>.github.io`, the build uses `/`.
- If you later move to a custom domain, you can set `VITE_BASE_PATH=/` if needed.
