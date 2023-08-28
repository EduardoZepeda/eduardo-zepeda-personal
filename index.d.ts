interface generateRoutesProps {
  route: string
}

interface MetadataProps {
  metadata: frontmatter
}

interface CategoriesProps {
  categories: string[]
}

interface PostDateProps {
  date: Date
}

interface ReadingTimeProps {
  numWords: number | undefined
}

interface PaginationProps {
  currentPage: number
  lastPage: number
}

interface Pagination {
  page: number
  previousPage: number
  nextPage: number
  lastPage: number
  firstPage: number
}

interface Post extends Pagination {
  data: PageFileParams[]
}

interface PageFileParams {
  params: PostData
}

interface NextAndPreviousProps {
  previous: string
  next: string
}

interface PageParams {
  page: string
}

interface PageProps {
  params: pageParams
}

interface PostData {
  frontmatter: frontmatter
  slug: string
  directory: string
}

interface PostProps {
  posts: PaginationWithData

}

interface PaginationWithData extends Pagination {
  data: PageFileParams[]
}

interface CodeHighlightProps {
  content: string
  directory: string
}

interface SimilarPost {
  similarity: number
  title: string
  slug: string
  description: string
  image: string
  directory: string
}

interface SimilarPostProps {
  posts: SimilarPost[]
  content: string
}

interface AuthorsProps {
  authors: string[] | undefined
}

interface Frontmatter {
  [key: string]: any
}