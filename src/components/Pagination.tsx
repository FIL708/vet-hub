import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    if (totalPages < 2) return false;

    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));
    const linksArray: JSX.Element[] = [];

    for (let page = minPage; page <= maxPage; page++) {
        linksArray.push(
            <Link
                href={`?page=${page}`}
                key={page}
                className={`btn join-item ${
                    currentPage === page ? 'btn-active pointer-events-none' : ''
                }`}
            >
                {page}
            </Link>
        );
    }
    return (
        <>
            <div className='join hidden sm:block'>{linksArray}</div>
            <div className='join block sm:hidden'>
                {currentPage > 1 && (
                    <Link
                        href={`?page=${currentPage - 1}`}
                        className='btn join-item'
                    >
                        «
                    </Link>
                )}
                <button className='btn join-item pointer-events-none'>
                    Strona {currentPage}
                </button>
                {currentPage < totalPages && (
                    <Link
                        href={`?page=${currentPage + 1}`}
                        className='btn join-item'
                    >
                        »
                    </Link>
                )}
            </div>
        </>
    );
}
