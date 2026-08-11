# the-genesis.github.io

My personal website, V2. Originally hand-written HTML/CSS/JS, now built with React + Vite.

## Running it

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Layout

```
index.html            Vite entry shell (title, favicon, fonts)
src/main.jsx          React root; imports the stylesheets in cascade order
src/App.jsx           Page shell, owns the sidenav open/closed state
src/components/       One component per section, plus the nav/sidenav/overlay
src/data/             Content: featured works, social links
src/styles/           style.css, mobile.css, sidenav.css
public/assets/        Images and icons, served from /assets/...
```

Two things are easy to get wrong:

- **Stylesheet import order** in `src/main.jsx` is load-bearing. `mobile.css` and
  `sidenav.css` override `style.css` by re-declaring the same selectors, so the
  order must stay style → mobile → sidenav.
- **`assetsDir` is `bundle`**, not the Vite default of `assets`, so hashed build
  output does not land in the same directory as `public/assets/`.

## Adding a featured work

Add an entry to `src/data/works.js`. Set `published: false` to hide a piece
without deleting it.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. The repo's Pages source is set to
"GitHub Actions".
