interface propsWithChildren {
  children: React.ReactNode
}

interface UseFetchResult<T> {
  fetchData: () => Promise<T>;
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

interface PostFromXml {
  title: string;
  summary: string;
  link: string;
  pubDate: string | number | Date;
  category: string | string[];
}

interface PortfolioProject {
  imgSrc: string
  title: string
  info: string
  websiteLink: string
  sourceCodeLink?: string
  stack: string
}

interface Project {
  title: string
  description: string
  stack: string
  link: string
}

interface paginatorObject {
  currentPageItems: PostFromXml[]
  currentPage: number | null
  nextPage: number | null
  previousPage: number | null
  totalPages: number | null
}

interface ProjectItemProps {
  title: string
  description: string
  link: string
  stack: string
}

interface PortfolioImageProps {
  imgSrc: string
  title: string
  websiteLink: string

}

interface PortfolioItemProps {
  imgSrc: string
  title: string
  info: string
  websiteLink: string
  sourceCodeLink: string | undefined
  stack: string
}

interface openSidebarContextProps {
  hideSidebar: boolean
  setHideSidebar: Dispatch<SetStateAction<boolean>>
  socialMediaLinks: socialMediaProps
  authorFirstName: string
  authorLastName: string
}

interface socialMediaProps {
  github: string
  instagram: string
  linkedin: string
  twitter: string
  base64Email: string
}