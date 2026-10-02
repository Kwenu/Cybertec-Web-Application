# Deployment

## GitHub Pages

The included GitHub Actions workflow builds with the GitHub Pages base path:
`/Cybertec-Web-Application/`.

In GitHub: Settings -> Pages -> Source -> GitHub Actions.

## Vercel

Vercel builds with the root base path `/`, so the same source works at a Vercel domain.
Use the normal Vite settings:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

Push to `main` to trigger a new deployment.
