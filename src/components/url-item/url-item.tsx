import './url-item.scss';
import {LinkData} from '../../types/types';
import classnames from 'classnames';
import {BASE_URL} from '../../const';

type UrlItemProps = {
  link: LinkData;
  onClick: (link: string) => void;
  copiedLink: string | null;
}

function UrlItem(props: UrlItemProps) {
  const {link, onClick, copiedLink} = props;
  const shortLink = `${BASE_URL}${link.code}`;

  const buttonClass = classnames({
    'url-item__copy-button': true,
    'button': true,
    'active': copiedLink === `https://gotiny.cc/${link.code}`
  });

  return (
    <li className="url-list__item url-item" data-active={copiedLink === shortLink}>
      <a className="url-item__link url-item__link--full link" href={link.long}>{link.long}</a>
      <a className="url-item__link url-item__link--short link" href={shortLink}>{shortLink}</a>
      <button
        className={buttonClass}
        type="button"
        onClick={() => onClick(shortLink)}
      >
        { copiedLink === shortLink ? 'Copied' : 'Copy'}
      </button>
    </li>
  );
}

export default UrlItem;
