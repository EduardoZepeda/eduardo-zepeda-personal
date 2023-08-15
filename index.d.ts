interface generateRoutesProps {
  route: string
}

interface MetadataProps {
  metadata: Frontmatter
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

interface NextAndPreviousProps {
  previous: string
  next: string
}

interface PageProps {
  params: pageParams
}

interface PageParams {
  page: string
}

interface Frontmatter {
  title: string;
  date: Date;
  categories?: string[];
  coverImage?: string;
  coverImageCredits?: string;
  description?: string;
  keywords?: string[];
  authors?: string[];
  numWords?: number;
}

interface PageFileParams {
  params: {
    frontmatter: Frontmatter,
    slug: string,
    directory: string,
  }
}

interface PostProps {
  posts: PaginationWithData

}

interface PaginationWithData extends Pagination {
  data: PageFileParams[]
}

