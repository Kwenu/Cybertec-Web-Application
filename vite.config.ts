import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repository under /Cybertec-Web-Application/.
// Vercel and other root-domain hosts serve it from /.
// GitHub Actions automatically exposes GITHUB_ACTIONS=true during the Pages build.
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPagesBuild ? '/Cybertec-Web-Application/' : '/',
})
