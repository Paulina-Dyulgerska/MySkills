
import './EducationCard.css';

const EducationCard = ({
    degree,
    speciality,
    university,
    period,
    iconClassName,
    onClickTogglePopup,
}) => {

    return (
        <article className="education-item" onClick={onClickTogglePopup}>
            <h5 className="degree">{degree}</h5>
            <h4 className="speciality">{speciality}</h4>
            <h6 className="university">{university}</h6>
            <p className="period">{period}</p>
            <span className="icon"><i className={iconClassName}></i></span>
        </article>
    )
}

export default EducationCard;
