export default async function generateSitemap() {
	const date = new Date();
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eduardozepeda.dev</loc>
    <lastmod>${date.toISOString().split("T")[0]}</lastmod>
  </url>
<urlset/>`;
}
