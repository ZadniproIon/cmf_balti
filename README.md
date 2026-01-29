# cmf-balti

Centrul Medicilor de Familie (CMF) Bălți — a multilingual public health concept website for the CMF Bălți.

This started as a simple HTML/CSS/JS project for a university internship. I ended up falling in love with it and expanded it into a full React app with routing, i18n, and a richer UI.

## Live Site
- https://cmfbalti.netlify.app/

## Features
- Multi-language UI (Romanian default, plus Russian and English)
- Client-side routing with clean, shareable URLs
- Responsive layout with mobile navigation and language switcher
- Maps integration for contact/location (Leaflet)
- SEO essentials (OpenGraph/Twitter tags, robots.txt, sitemap.xml)

## Tech Stack
- React + Vite
- React Router
- i18next + react-i18next
- Leaflet + react-leaflet
- Lucide icons
- Vanilla CSS

## Screenshots
Add screenshots to `public/screenshots/` (or any folder you prefer) and link them here. Suggested filenames:
- `home.png`
- `about.png`
- `general.png`
- `transparency.png`
- `contact.png`
- `404.png`

Example:
```
![Home](public/screenshots/home.png)
![About](public/screenshots/about.png)
![General](public/screenshots/general.png)
![Transparency](public/screenshots/transparency.png)
![Contact](public/screenshots/contact.png)
![404](public/screenshots/404.png)
```

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment
Hosted on Netlify. Any push to the main branch will trigger a new build.

## Project Structure
```
public/        # static assets
src/           # React app
  components/  # shared UI
  pages/       # route pages
  styles/      # page and shared styles
  locales/     # i18n translations
```