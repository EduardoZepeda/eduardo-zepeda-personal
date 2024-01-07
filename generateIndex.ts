import fs from 'fs'
import matter from 'gray-matter'
import slugify from '@utils/slugify'


async function generateIndex() {
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
            .reverse()
        const index = rawPosts.map(({ slug, frontmatter }, index) => {
            return (
    {
        "date": frontmatter?.date,
        "id": index,
        "slug": slugify(frontmatter?.title),
        "title": frontmatter?.title,
        "description": frontmatter?.description || '',
        "categories": frontmatter?.categories,
        "fake": true
    })
        })
        fs.writeFileSync('public/index.json', JSON.stringify(index).toLocaleLowerCase())
    } catch (e) {
        console.error(e)
    }

}

export default generateIndex