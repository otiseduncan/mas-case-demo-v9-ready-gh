# MAS Case by Case — Deploy Notes

- Uses Vite + React + HashRouter
- `vite.config.ts` has `base: './'` in production (safe for any repo name)
- Build artifacts go to `./docs` for GitHub Pages

## Build
npm install
npm run build

## Deploy to GitHub Pages
Push the repo, then in Settings → Pages:
- Source: Deploy from a branch
- Branch: main
- Folder: /docs

Open: https://<username>.github.io/<repo>/#/
