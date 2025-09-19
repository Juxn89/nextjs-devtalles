export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
	 const MAX_VISIBLE_PAGES = 7;
	 const MAX_FIRST_VISIBLE_PAGES = 3;
	 const MAX_LAST_VISIBLE_PAGES = 2;

	 if(totalPages <= MAX_VISIBLE_PAGES)
		return Array.from({ length: totalPages }, (_, i) => i + 1);

	 if(currentPage <= MAX_FIRST_VISIBLE_PAGES)
		 return [1, 2, 3, '...', totalPages - 1, totalPages]

	 if(currentPage >= totalPages - MAX_LAST_VISIBLE_PAGES)
		return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages ]

	 return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}