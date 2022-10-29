import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';
import './pagination.scss';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });


    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    return (
        <ul
            className={classnames('pagination', { [className]: className })}
        >
            {paginationRange?.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination__item pagination__item--dots">&#8230;</li>;
                }

                return (
                    <li
                        key={pageNumber}
                        className={classnames('pagination__item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
