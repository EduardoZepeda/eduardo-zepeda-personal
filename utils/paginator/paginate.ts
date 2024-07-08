export default function paginate(array: PostFromXml[], pageSize: number, currentPage: number): paginatorObject {
    const totalItems = array.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPageItems = array.slice(startIndex, endIndex);
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
    const previousPage = currentPage > 1 ? currentPage - 1 : null;

    return {
        currentPageItems,
        currentPage,
        nextPage,
        previousPage,
        totalPages
    };
}