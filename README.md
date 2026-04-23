# Stoil Radkov Portfolio

Static portfolio site for Stoil Radkov.

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
