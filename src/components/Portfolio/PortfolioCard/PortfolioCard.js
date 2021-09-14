import './PortfolioCard.css';

import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';

const PortfolioCard = ({
    imageSrc,
    title,
    details,
    url,
}) => {

    return (
        <article className="portfolio-item slide" >
            <article className="media-top">
                <img
                    className="image-fluid"
                    src={imageSrc}
                    alt="Portfolio item image"
                />
            </article>
            <article className="media-content">
                <h2 className="title">{title}</h2>
                <p className="details">{details}</p>
                <ExternalNavigationItem className="link btn btn-cta" path={url}>
                    Open in new tab <i className="arrow_right fas fa-long-arrow-alt-right"></i>
                </ExternalNavigationItem>
            </article>
        </article>
    )
}

export default PortfolioCard;