import './MediaItem.css';

import NavigationItem from '../../Header/NavigationItem/NavigationItem';
import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';

const MediaItem = ({
    icon,
    title,
    link,
    linkText,
}
) => {
    return (
        <article className="media-item">
            <i className={icon}></i>
            <article className="media-item-body">
                <h6>{title}</h6>
                    <ExternalNavigationItem className="link" path={link}>
                        {linkText}
                    </ExternalNavigationItem>
            </article>
        </article>
    )
}

export default MediaItem;