import { useState, useEffect, createContext } from 'react';

import './Education.css';
import educationsService from '../../services/educationsService';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import EducationCard from '../Education/EducationCard/EducationCard';
import CVContainer from '../CVContainer/CVContainer';

import Popup from '../Shared/Popup/Popup';
import LoadingBar from '../Shared/LoadingBar/LoadingBar';

// import imgPolygon from "../../img/polygon.png";
// TODO - to store the collection in the Context
// TODO - add the pdfs from the studies and store them in a file storage (Blob)
export const ModalContext = createContext();

const Education = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [educations, setEducations] = useState([]);
    const [details, setDetails] = useState('');
    const [speciality, setSpeciality] = useState('');

    useEffect(() => {
        educationsService.get()
            .then(res => setEducations(res))
            .catch(err => console.log(err));
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
        <section className="education-wrapper wrapper">
            <section className="education-container">
                <ModalContext.Provider value={setIsModalOpen}>
                    <article className="education-content content">
                        {/* <img src={imgPolygon} alt="" className="polygon" /> */}
                        <TextBlockContent
                            title="This is my Passion, Heart &amp; Soul"
                            primary={["Every great success is based on great many trainings"]}
                            secondary={["I have studied all my life. Some people are asking me why?!",
                                "The simples answer is: Because I love knowedge and I want to know how the things are working, how the World is running and I could not stay a day without discovering at least one new thing. This is the human nature for me and I try to be a Human."]}
                        >
                        </TextBlockContent>
                    </article>
                    <CVContainer />
                    <article className="education-skills">
                        {educations.length === 0 ? <LoadingBar></LoadingBar> :
                            educations.map((e) => {
                                return <EducationCard
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
                                ////could be done with destruktoring too:
                                // <EducationCard
                                // key={e.id} {...e}/>
                            })}

                        {isModalOpen &&
                            <Popup
                                content={
                                    <TextBlockContent
                                        title="Courses and main subjects:"
                                        primary={[speciality]}
                                        secondary={details.split('; ')}
                                    >
                                    </TextBlockContent>}
                                handleClose={() => hidePopup()}
                            />
                        }
                    </article>
                    <CVContainer />
                </ModalContext.Provider>
            </section>
        </section>
    )
}

export default Education;