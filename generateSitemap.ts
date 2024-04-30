import fs from 'fs'
import { siteData } from 'siteData'

async function generateSitemap() {

  const sitemap = `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
          <loc>${siteData["siteUrl"]}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
      </url>
      <url>
          <loc>${siteData["siteUrl"]}/blog/</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
      </url>
  </urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap