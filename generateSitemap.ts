import { siteData } from "siteData";

export default async function generateSitemap() {
  const date = new Date();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteData['siteUrl']}</loc>
    <lastmod>${date.toISOString().split("T")[0]}</lastmod>
  </url>
  <url>
    <loc>${siteData['siteUrl']}/blog</loc>
    <lastmod>${date.toISOString().split("T")[0]}</lastmod>
  </url>
<urlset/>`;
}
