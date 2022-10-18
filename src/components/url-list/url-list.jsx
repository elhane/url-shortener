import './url-list.scss';

import UrlItem from './url-item/url-item';
import Pagination from '../pagination/pagination';
import {useMemo, useState} from 'react';
import { links } from '../../mocks/mocks';
import { PAGE_SIZE } from '../../const';

function UrlList() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return links.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <ol className="url-list">
        {
          currentListData.map(item => {
            return (
              <UrlItem key={item.id} {...item}/>
            )
          })
        }
      </ol>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={links.length}
        pageSize={PAGE_SIZE}
        onPageChange={page => setCurrentPage(page)}
      />

    </>

  )
}

export default UrlList;
