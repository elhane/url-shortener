import './url-list.scss';
import UrlItem from '../url-item/url-item';
import Pagination from '../pagination/pagination';
import {useMemo, useState} from 'react';
import {PAGE_SIZE} from '../../const';
import {useAppSelector} from '../../hooks';

function UrlList() {
  const [currentPage, setCurrentPage] = useState(1);
  const links = useAppSelector((state) => state.links);

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return links.slice(firstPageIndex, lastPageIndex).reverse();
  }, [currentPage, links]);

  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  return (
    <>
      <ol className="url-list">
        {
          currentListData.map((link) => (
            <UrlItem
              key={link.code}
              copiedLink={copiedLink}
              onClick={copyToClipboard}
              link={link}
            />
          ))
        }
      </ol>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={links.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
    </>
  );
}

export default UrlList;
