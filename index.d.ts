interface MetadataProps {
  metadata: Metadata
}

interface Metadata {
  date: string
  numWords: number
}

interface PostDateProps {
  date: string
}

interface ReadingTimeProps {
  numWords: number
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