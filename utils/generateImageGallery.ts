import generateImageUrl from "@utils/generateImageUrl"

export default function generateImageGallery(content: string, directory: string): string[] {
    const regexp = /!\[.*?\]\(((.+?\.(?:png|jpg|gif|webp|avif|jpeg))[^)]*)\)/g
    return [...content.matchAll(regexp)].map(image => image[2]).map(imgSrc => generateImageUrl(imgSrc, directory))
}
