export default function generateImageGallery(content: string, directory: string, generateImageUrl: (url: string, directory: string) => string): string[] {
  const regexp = /!\[.*?\]\(((.+?\.(?:png|jpg|gif|webp|avif|jpeg))[^)]*)\)/g
  return [...content.matchAll(regexp)].map(image => image[2]).map(imgSrc => generateImageUrl(imgSrc, directory))
}
