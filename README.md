# Portfolio

Static portfolio site.

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

- `/` — Homepage
- `/work/insurance-workflow-portal/` — Insurance Workflow Portal
- `/work/analytics-data-workspace/` — Analytical Data Workspace
- `/work/energy-pricing-dashboard/` — Energy Pricing Dashboard

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
