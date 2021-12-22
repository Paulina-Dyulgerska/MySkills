import './MediaItem.css';

import ExternalNavigationItemAsSpan from '../../Header/NavigationItem/ExternalNavigationItemAsSpan';

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
                    <ExternalNavigationItemAsSpan className="link" path={link}>
                        {linkText}
                    </ExternalNavigationItemAsSpan>
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