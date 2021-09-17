import './PortfolioCard.css';

const PortfolioCard = ({
    imageSrc,
    title,
    details,
    url
}) => {

    const onClickHandler = () => {
        window.open(url, "_blank");
    }

    return (
        <article className="portfolio-item slide">
            <article className="portfolio-item-content">
                <article className="media-top">
                    <img
                        className="image-fluid external-link"
                        src={imageSrc}
                        alt="Portfolio item"
                        onClick={onClickHandler}
                    />
                </article>
                <article className="media-content">
                    <h2 className="title external-link" onClick={onClickHandler}>{title}</h2>
                    <p className="details">{details}</p>
                </article>
            </article>
        </article>
    )
}

export default PortfolioCard;