# Oasis World Lineage II Website

A modern, responsive website for Oasis World Lineage II game servers.

## Features

- Multi-world support (High Five Salvation & Interlude+)
- Bilingual support (English & Polish)
- Dynamic content loading based on selected world
- Responsive design
- Download management system

## Deployment on Vercel

This project can be easily deployed on Vercel:

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it as a static site and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Drag and drop this folder or connect via Git
4. Vercel will automatically configure and deploy

## Project Structure

```
├── index.html          # Main page
├── features.html       # Features page
├── configTheme.js     # World/server configuration
├── configLang.js      # Language translations
├── css/               # Stylesheets
├── js/                # JavaScript files
├── images/            # Images and assets
└── font/              # Custom fonts
```

## Local Development

To run locally, you can use any static file server:

### Python
```bash
python -m http.server 8000
```

### Node.js (http-server)
```bash
npx http-server -p 8000
```

### PowerShell (Windows)
```powershell
.\start-server.ps1
```

Then open `http://localhost:8000` in your browser.

## Configuration

- **Worlds/Servers**: Edit `configTheme.js` to add or modify server configurations
- **Languages**: Edit `configLang.js` to add or modify translations
- **Styling**: SCSS files are in `scss/` directory, compiled CSS in `css/`

## SEO

The site includes meta descriptions, Open Graph and Twitter Card tags, canonical URLs, `robots.txt`, and `sitemap.xml`. If your live domain is not `https://oasis-world.eu`, search and replace that URL in:

- `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD)
- `features.html` (canonical, og:url, og:image, twitter:image, BreadcrumbList)
- `robots.txt` (Sitemap URL)
- `sitemap.xml` (all `<loc>` URLs)

## License

All trademarks referenced herein are the properties of their respective owners.
This is only a test server for Lineage 2. All rights reserved by Ncsoft.
