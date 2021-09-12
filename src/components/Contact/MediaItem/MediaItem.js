import './MediaItem.css';

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
                {link &&
                    <ExternalNavigationItem className="link" path={link}>
                        {linkText}
                    </ExternalNavigationItem>
                }
                {!link &&
                    <p>
                        {linkText}
                    </p>
                }
            </article>
        </article>
    )
}

export default MediaItem;