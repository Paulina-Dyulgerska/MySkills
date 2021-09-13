import { useState, useEffect, createContext } from 'react';
import globalConstants from '../../globalConstants/globalConstants';

import './Education.css';
import educationsService from '../../services/educationsService';
import fileDeliverService from '../../services/fielDeliverService';

import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import CustomLink from '../Shared/CustomLink/CustomLink';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import EducationCard from '../Education/EducationCard/EducationCard';
import ExternalNavigationItem from '../Header/NavigationItem/ExternalNavigationItem';
import Popup from '../Shared/Popup/Popup';
import LoadingBar from '../Shared/LoadingBar/LoadingBar';
import { Link } from 'react-router-dom';

// import imgPolygon from "../../img/polygon.png";
// TODO - to store the collection in the Context
// TODO - add the pdfs from the studies and store them in a file storage (in Firebase)
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

    var downloadUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/download/CV_EN.pdf'
    var showUrl = globalConstants.backendWebApiServerUrl + '/fileDeliver/show/CV_EN.pdf'

    const showPopup = (currentDetails, currentSpeciality) => {
        setIsModalOpen(true);
        setDetails(currentDetails);
        setSpeciality(currentSpeciality);
    }

    const hidePopup = () => {
        setIsModalOpen(false);
    }

    const onClickDownloadCVButton = () => {
        console.log("hi from onClickDownloadCVButton");
        fileDeliverService.get("CV_EN.pdf")
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                        <li className="btn btn-cta" >
                            <a href={downloadUrl} rel='noopener noreferrer' download>
                                Download CV
                            </a >
                        </li>
                        <ExternalNavigationItem className="btn btn-cta" path={showUrl}>
                            Show CV
                        </ExternalNavigationItem>
                    </article>

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
                                ////moje i taka s destruktorirane:
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
                </ModalContext.Provider>
            </section>
        </section>
    )
}

export default Education;