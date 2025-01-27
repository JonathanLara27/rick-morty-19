export interface InfoPagination {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
    currentPage: number;
}