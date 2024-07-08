import fs from 'fs'
import { siteData } from 'siteData'
import fetchPosts from '@utils/fetch/posts'
import paginate from '@utils/paginator/paginate'

const NUMBER_OF_POSTS = 10


async function generateSitemap() {
    const url = siteData["blog"]["rss"]
    const posts = await fetchPosts(url)
    const { totalPages } = paginate(posts, NUMBER_OF_POSTS, 1)
    const paths = new Array(totalPages ? totalPages + 1 : 1).fill(0).reduce((a, _, i) => [...a, i], [])
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
        ${paths.map((page: number) => `<url>
          <loc>${siteData["siteUrl"]}/blog/page/${page}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
      </url>`)}
  </urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap