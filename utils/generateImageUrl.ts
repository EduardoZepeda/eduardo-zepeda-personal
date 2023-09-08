export function generateImagePostUrl(url: string | undefined, directory: string): string {
  if (url === undefined) { return '' }
  return url.replace('images/', `/blog/content/posts/${directory}/images/`)
}

export function generateImagePageUrl(url: string | undefined, directory: string): string {
  if (url === undefined) { return '' }
  return url.replace('images/', `/blog/content/pages/${directory}/images/`)
}
