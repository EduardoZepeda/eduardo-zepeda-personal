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