import './ExperienceCard.css';

import LogoNavigationItem from '../../Header/NavigationItem/LogoNavigationItem';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';

function formatDate(userDOB) {
    const dob = new Date(userDOB);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const day = dob.getDate();
    const monthIndex = dob.getMonth();
    const year = dob.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
}

function monthsDiff(d1, d2) {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    const dif = date2 - date1;
    const days = Math.floor(dif / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const daysLeft = days - years * 365;
    const months = Math.floor(daysLeft / 30);

    return `${years ? `${years} years and ` : ''}${months} months`;
}

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

    startDate = formatDate(startDate);
    endDate = formatDate(endDate);
    const dateString = `${startDate} - ${endDate}`;
    const workPeriodString = `${monthsDiff(startDate, endDate)}`;

    return (
        <article className="expriance-item" >
            <article className="media-left">
                {url &&
                    <a className="link" href={url}>
                        <img className="logo" src={logo} alt="Company Logo" />
                        <p className="company">{company}</p>
                    </a>
                }
                {!url &&
                    <p className="company">{company}</p>
                }
            </article>
            <article className="media-body" onClick={onClickTogglePopup}>
                <h4 className="job">{job}</h4>
                <span className="period">{`${dateString} (${workPeriodString})`}</span>
                <p className="details">{shortenText(details)}</p>
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

function shortenText(t) {
    if (t.length > 150) {
        t = t.slice(0, 150) + '...';
    }
    return t;
}