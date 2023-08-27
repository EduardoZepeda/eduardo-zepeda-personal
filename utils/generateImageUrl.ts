export default function generateImageUrl(url: string, directory: string): string {
    return url.replace('images/', `/blog/content/posts/${directory}/images/`)
}
