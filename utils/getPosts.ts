import fs from 'fs'
import matter from 'gray-matter'
import slugify from '@utils/slugify'

export default function getPosts() {
    // TODO Unfortunately this could be a bottleneck, but as today nextjs doesn't have a proper way to pass an extra parameter to
    // getStaticProps other than the required parameter, and caching would add up an extra layer of complexity, for small blogs it's ok
    // Read all the  (for every file, here is the bottleneck), find the one with the same slug as the one from the params
    const files = fs.readdirSync('public/blog/content/posts')
    const posts = files.map((directory) => {
        const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
        const { data: frontmatter } = matter(readFile)
        return {
            params: {
                slug: slugify(frontmatter?.title),
                directory,
                frontmatter
            }
        }
    })
        .filter(post => process.env.NODE_ENV === 'production' ? !post?.params?.frontmatter?.draft : true)
        .sort((a, b) => new Date(b.params.frontmatter.date).valueOf() - new Date(a.params.frontmatter.date).valueOf())
    return posts
}