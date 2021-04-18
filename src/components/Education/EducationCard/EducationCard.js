
import './EducationCard.css';

import ButtonCta from '../../Shared/ButtonCta/ButtonCta';

const EducationCard = ({
    degree,
    speciality,
    institution,
    startYear,
    endYear,
    iconClassName,
    details,
    buttonText,
    onClickTogglePopup,
}) => {

    return (
        <article className="education-item" onClick={onClickTogglePopup}>
        {/* <article className="education-item" > */}
            <h5 className="degree">{degree}</h5>
            <h4 className="speciality">{speciality}</h4>
            <h6 className="university">{institution}</h6>
            <p className="period">{startYear} - {endYear}</p>
            <span className="icon"><i className={iconClassName}></i></span>
            <ButtonCta>{buttonText}</ButtonCta>
        </article>
    )
}

export default EducationCard;
