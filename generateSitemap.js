const fs = require('fs')
const matter = require('gray-matter')

const slugify = (text) =>
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')

const date = new Date()

async function generateSitemap () {
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
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .filter(post => !post.frontmatter.draft)
    rawPosts.forEach(({slug, frontmatter})=>content+=`
    <url>
      <loc>https://eduardozepeda.dev/blog/${slugify(frontmatter?.title)}/</loc>
      <lastmod>${frontmatter.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    `)
  } catch (e) {
    console.error(e)
  }
  const sitemap = `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
          <loc>https://eduardozepeda.dev/</loc>
          <lastmod>${date}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
      </url>
      ${content}
  </urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)

}
generateSitemap()
