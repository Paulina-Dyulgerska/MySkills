import { useState, useEffect, createContext } from 'react';

import './Education.css';
import * as educationsService from '../../services/educationsService.js';

import ButtonCta from '../Shared/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';
import EducationCard from '../Education/EducationCard/EducationCard';
import Popup from '../Shared/Popup/Popup';

import imgPolygon from "../../img/polygon.png";
export const ModalContext = createContext();

const Education = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [educations, setEducations] = useState([]);
    const [details, setDetails] = useState('');
    const [speciality, setSpeciality] = useState('');

    useEffect(() => {
        educationsService.getAll()
            .then(res => setEducations(res))
    }, []);

    const moreDetailsButtonText = 'More Details for this Education';
    
    const showPopup = (currentDetails, currentSpeciality) => {
        setIsModalOpen(true);
        setDetails(currentDetails);
        setSpeciality(currentSpeciality);
    }

    const hidePopup = () => {
        setIsModalOpen(false);
    }

    return (
        <section className="education-wrapper">
            <section className="education-container">
                <ModalContext.Provider value={setIsModalOpen}>
                    <article className="education-content">
                        {/* <img src={imgPolygon} alt="" className="polygon" /> */}
                        <TextBlockContent
                            title="This is my Passion, Heart &amp; Soul"
                            primary={["Every great success is based on great many trainings"]}
                            secondary={["I have studied all my life. Some people are asking me why?!",
                                "The simples answer is: Because I love knowedge and I want to know how the things are working, how the World is running and I could not stay a day without discovering at least one new thing. This is the human nature for me and I try to be a Human."]}
                        >
                        </TextBlockContent>
                        <ButtonCta>Download CV</ButtonCta>
                    </article>
                    <article className="education-skills">
                        {educations.map((e) => {
                            return (
                                <EducationCard
                                    key={e.id}
                                    id={e.id}
                                    degree={e.degree}
                                    speciality={e.speciality}
                                    institution={e.institution}
                                    startYear={e.startYear}
                                    endYear={e.endYear}
                                    path={e.path}
                                    details={e.details}
                                    iconClassName={e.iconClassName}
                                    buttonText={moreDetailsButtonText}
                                    onClickTogglePopup={() => showPopup(e.details, e.speciality)}
                                />
                                ////moje i taka s destruktorirane:
                                // <EducationCard
                                // key={e.id} {...e}/>
                            )
                        })}

                        {isModalOpen &&
                            <Popup
                                content={
                                    <TextBlockContent
                                        title="Courses and main subjects:"
                                        primary={[speciality]}
                                        secondary={details.split(', ')}
                                    >
                                    </TextBlockContent>}
                                handleClose={() => hidePopup()}
                            />
                        }
                    </article>
                </ModalContext.Provider>
            </section>
        </section>
    )
}

export default Education;