import './MediaItem.css';

const MediaItem = ({
    title,
    link,
    linkText,
    details,
}
) => {
    return (
        <article className="media-item">
            <i className="flaticon-phone"></i>
            <article className="media-item-body">
                <h6>{title}</h6>
                <a href={link}>{linkText}</a>
                <p>{details}</p>
            </article>
        </article>
    )
}

export default MediaItem;