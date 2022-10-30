import './url-item.scss';

type UrlItemProps = {
  shortUrl: string;
  url: string;
}

function UrlItem({ shortUrl, url }: UrlItemProps) {
  return (
    <li className="url-list__item url-item">
      <a className="url-item__link link" href={url}>{url}</a>
      <a className="url-item__link url-item__link--short link" href={shortUrl}>{shortUrl}</a>
      <button className="url-item__copy-button button" type="button">Copy</button>
    </li>
  );
}

export default UrlItem;
