import './MediaItem.css';

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
                <a href={link}>{linkText}</a>
            </article>
        </article>
    )
}

export default MediaItem;