
import './EducationCard.css';

const EducationCard = ({
    degree,
    speciality,
    institution,
    startYear,
    endYear,
    iconClassName,
    details,
    onClickTogglePopup,
}) => {

    return (
        <article className="education-item" onClick={onClickTogglePopup}>
            <h5 className="degree">{degree}</h5>
            <h4 className="speciality">{speciality}</h4>
            <h6 className="university">{institution}</h6>
            <p className="period">{startYear} - {endYear}</p>
            <span className="icon"><i className={iconClassName}></i></span>
        </article>
    )
}

export default EducationCard;
