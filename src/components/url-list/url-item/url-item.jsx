import "./url-item.scss"

function UrlItem({ short_url, clicks, url }) {
  return (
    <li className="url-list__item url-item">
      <a className="url-item__link" href={url}>{url}</a>
      <a className="url-item__link url-item__link--short" href={short_url}>{short_url}</a>
      <span className="url-item__counter">{clicks}</span>
    </li>
  )
}

export default UrlItem;
