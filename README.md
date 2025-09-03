# MAS Case by Case — V7

- Splash login with roles: TECH, MGR, ADMIN.
- Cases: create/search/resolve, manager claim + release, photo capture/uploads, thumbnails on cards.
- Analytics (MGR), Activity log.
- Admin (ADMIN): user management + System Health.
- 100% front‑end (no backend); data stored in localStorage.

## Demo accounts
- Technician — `technician@mas.demo` / `tech123`
- Manager — `manager@mas.demo` / `mgr123`
- Admin — `admin@mas.demo` / `admin123`

## Development
```bash
npm install
npm run dev
# open http://localhost:5173/
```

## GitHub Pages
`vite.config.ts` uses:
```ts
const isProd = process.env.NODE_ENV === "production";
export default defineConfig({ base: isProd ? "/mas-case-demo/" : "/", build: { outDir: "docs" } });
```
If your repo name differs, change the base string.

## Notes
- Open = green badge. Closed = red badge.
- Open, unclaimed cases older than 15 minutes glow softly red and float to the top.
- Admin pages do not manage cases—only users and health.
