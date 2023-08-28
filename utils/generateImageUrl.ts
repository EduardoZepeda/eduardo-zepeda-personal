export default function generateImageUrl (url: string | undefined, directory: string): string {
  if (url === undefined) { return '' }
  return url.replace('images/', `/blog/content/posts/${directory}/images/`)
}
