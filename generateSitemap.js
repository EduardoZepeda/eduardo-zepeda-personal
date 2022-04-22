const fs = require('fs')

let date = new Date()

async function generateSitemap() {

  const sitemap = `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
          <loc>https://eduardozepeda.dev/</loc>
          <lastmod>${date}</lastmod>

      </url>
  </urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()