import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User-site repo (the-genesis.github.io) serves from the domain root, so base is '/'.
// assetsDir is 'bundle' rather than the default 'assets' so the hashed build output
// never lands in the same directory as the static files copied from public/assets/.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    // Without this, the minifier rewrites the media queries to Level 4 range
    // syntax (@media (width<=475px)), which the old hand-written site did not
    // rely on and which needs Safari 16.4+. Keep the max-width form.
    cssTarget: 'safari13',
  },
})
