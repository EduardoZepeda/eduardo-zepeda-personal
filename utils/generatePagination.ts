export default function generatePagination (currentPage: number, lastPage: number): Pagination {
  const firstPage = 1
  return {
    page: currentPage,
    nextPage: currentPage + 1 > lastPage ? lastPage : currentPage + 1,
    previousPage: currentPage - 1 < firstPage ? firstPage : currentPage - 1,
    firstPage,
    lastPage
  }
}
