import './ExperianceCard.css';

import LogoNavigationItem from '../../Header/NavigationItem/LogoNavigationItem';

const ExperianceCard = ({
    link,
    logo,
    company,
    job,
    period,
    details,
    onClickTogglePopup,
}) => {
    return (
        <article className="expriance-item" onClick={onClickTogglePopup}> 
            <article className="media-left">
                <a className="link" href={link}>
                    <img className="logo" src={logo} alt="Liebherr" />
                </a>
                <p className="company">{company}</p>
            </article>
            <article className="media-body">
                <h4 className="job">{job}</h4>
                <span className="period">{`${period} - (years...)`}</span>
                <p className="details">{details}</p>
            </article>
        </article>
    )
}

export default ExperianceCard;