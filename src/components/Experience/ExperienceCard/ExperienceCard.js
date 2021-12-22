import './ExperienceCard.css';

import formatingService from '../../../services/formatingService';

import ExternalNavigationItemAsSpan from '../../Header/NavigationItem/ExternalNavigationItemAsSpan';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';

const ExperienceCard = ({
    url,
    logo,
    company,
    job,
    startDate,
    endDate,
    details,
    buttonText,
    onClickTogglePopup,
}) => {

    startDate = formatingService.formatDate(startDate);
    endDate = formatingService.formatDate(endDate);

    const dateString = `${startDate} - ${endDate}`;
    const workPeriodString = `${formatingService.monthsDiff(startDate, endDate)}`;

    return (
        <article className="expriance-item" >
            <article className="media-left">
                {url &&
                    <ExternalNavigationItemAsSpan className="link" path={url}>
                        <img className="logo" src={logo} alt="Company Logo" />
                        <p className="company">{company}</p>
                    </ExternalNavigationItemAsSpan>
                }
                {!url &&
                    <p className="company">{company}</p>
                }
            </article>
            <article className="media-body" onClick={onClickTogglePopup}>
                <h4 className="job">{job}</h4>
                <span className="period">{`${dateString} (${workPeriodString})`}</span>
                <p className="details">{formatingService.shortenText(details)}</p>
                <ButtonCta
                    to={'#'} // path
                >
                    {buttonText}
                </ButtonCta>
            </article>
        </article>
    )
}

export default ExperienceCard;

// function monthsDiff(d1, d2) {
//     let date1 = new Date(d1).getTime();
//     let date2 = new Date(d2).getTime();
//     const dif = date2 - date1;
//     const days = Math.floor(dif / (1000 * 60 * 60 * 24));
//     const years = Math.floor(days / 365);
//     const daysLeft = days - years * 365;
//     const months = Math.floor(daysLeft / 30);

//     return `${years ? `${years} years and ` : ''}${months} months`;
// }

// function shortenText(t) {
//     if (t.length > 150) {
//         t = t.slice(0, 150) + '...';
//     }
//     return t;
// }