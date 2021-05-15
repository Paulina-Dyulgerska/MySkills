import './MediaItem.css';

import NavigationItem from '../../Header/NavigationItem/NavigationItem';

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
                <NavigationItem path={link}>{linkText}</NavigationItem>
            </article>
        </article>
    )
}

export default MediaItem;