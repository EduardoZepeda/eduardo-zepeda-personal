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
  categories: string[];
}