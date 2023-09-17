import fs from 'fs'
import matter from 'gray-matter'
import slugify from '@utils/slugify'
import { siteData } from 'siteData'

async function generateSitemap() {
  const date = new Date()
  let content = ''
  try {
    const files = fs.readdirSync('public/blog/content/posts')
    const rawPosts = files.map((directory) => {
      const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
      const { data: frontmatter } = matter(readFile)
      return {
        slug: directory,
        frontmatter
      }
    })
      // sort posts by date
      .sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf())
      .filter(post => !post.frontmatter.draft)
    rawPosts.forEach(({ slug, frontmatter }) => {
      content += `
    <url>
      <loc>${siteData["siteMapPrefix"]}${slugify(frontmatter?.title)}/</loc>
      <lastmod>${frontmatter.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    `
    })
  } catch (e) {
    console.error(e)
  }
  const sitemap = `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
          <loc>${siteData["siteUrl"]}</loc>
          <lastmod>${date.toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
      </url>
      ${content}
  </urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap