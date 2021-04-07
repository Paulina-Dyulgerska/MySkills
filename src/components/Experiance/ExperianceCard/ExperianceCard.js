import './ExperianceCard.css';

import LogoNavigationItem from '../../Header/NavigationItem/LogoNavigationItem';

const ExperianceCard = () => {
    return (
        <div className="exprience-item">
            <div className="media-left">
                <a href="https://www.liebherr.com">
                    <img src="https://www.liebherr.com/media/global/img/svg/logo_ci_liebherr.svg" alt="Liebherr" />
                </a>
            </div>
            <div className="media-body">
                <h4>Liebherr</h4>
                <span>March, 2015 - June, 2017 (1 year, 3 Month)</span>
                <p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
            </div>
        </div>
    )
}

export default ExperianceCard;