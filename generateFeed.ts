import fs from 'fs'
import matter from 'gray-matter'
import slugify from '@utils/slugify'
import { siteData } from 'siteData'

const date = new Date()

async function generateFeed() {
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
    <item>
        <title>${frontmatter?.title}</title>
        <link>${siteData["rssPrefix"]}${slugify(frontmatter?.title)}/</link>
        <description>${frontmatter?.description}</description>
        <guid>${siteData["rssPrefix"]}${slugify(frontmatter?.title)}/</guid>
    </item>
    `
        })
    } catch (e) {
        console.error(e)
    }
    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    
    <channel>
      <title>${siteData["title"]}</title>
      <link>${siteData["siteUrl"]}</link>
      <description>${siteData["siteDescription"] !== undefined ? siteData["siteDescription"] : ''}</description>
      <atom10:link
        xmlns:atom10="http://www.w3.org/2005/Atom"
        rel="self"
        type="application/rss+xml"
        href="${siteData["siteUrl"]}/feed.xml"
      />
      <language>${siteData["language"]}</language>
      ${content}
    </channel>
    
    </rss> `
    fs.writeFileSync('public/feed.xml', feed)
}

export default generateFeed