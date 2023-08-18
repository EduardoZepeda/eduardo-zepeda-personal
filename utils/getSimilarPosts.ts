import { stringSimilarity } from "string-similarity-js"
import getPosts from "@utils/getPosts"
import slugify from "@utils/slugify"

export default function getSimilarPosts(post: Frontmatter, content: string): SimilarPost[] {
    const posts = getPosts()
    const similarPosts = posts.map(posiblePost => {
        const similarity = stringSimilarity(posiblePost?.params?.frontmatter?.title, post.title)
        return {
            similarity,
            slug: slugify(posiblePost?.params?.frontmatter?.title),
            title: posiblePost?.params?.frontmatter?.title,
            description: posiblePost?.params?.frontmatter?.description || content,
            image: posiblePost?.params?.frontmatter?.coverImage,
            directory: posiblePost?.params?.directory
        }
    }).sort((a, b) => b.similarity - a.similarity)
    return similarPosts
}