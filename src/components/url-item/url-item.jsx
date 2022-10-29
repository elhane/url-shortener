import "./url-item.scss"

function UrlItem({ short_url, clicks, url }) {
  return (
    <li className="url-list__item url-item">
      <a className="url-item__link link" href={url}>{url}</a>
      <a className="url-item__link url-item__link--short link" href={short_url}>{short_url}</a>
      <button className="url-item__copy-button button" type="button">Copy</button>
    </li>
  )
}

export default UrlItem;
