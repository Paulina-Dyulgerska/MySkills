import { useState, useEffect } from 'react';

import './Education.css';
import * as educationService from '../../services/educationService.js';

import Bubbles from '../Shared/Bubbles/Bubbles';
import ButtonCta from '../Shared/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';
import EducationCard from '../Education/EducationCard/EducationCard';
import Popup from '../Shared/Popup/Popup';

import imgPolygon from "../../img/polygon.png";


const Education = () => {
    const [educations, setEducations] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState('');

    useEffect(() => {
        educationService.getAll()
            .then(res => setEducations(res))
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section className="education-wrapper">
            <section className="education-container">
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
                                onClickTogglePopup={togglePopup}
                            />
                            ////moje i taka s destruktorirane:
                            // <EducationCard
                            // key={e.id} {...e}/>
                        )
                    })}

                    {/* <EducationCard
                        degree="Professional degree: CPE"
                        speciality="C# Web Developer (Full Stack)"
                        institution="Software University"
                        startDate="2019"
                        endDate="2021"
                        path="/education"
                        iconClassName="fas fa-laptop"
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MAcc"
                        speciality="Accounting, Economics"
                        institution="University of Plovdiv"
                        startDate="2005"
                        endDate="2007"
                        path="/education"
                        iconClassName="fas fa-chart-line"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        institution="Technical University – Sofia, branch Plovdiv"
                        startDate="1997"
                        endDate="2003"
                        path="/education"
                        iconClassName="fas fa-tools"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="High School"
                        speciality="Mathematics and English"
                        institution="High School of Mathematics - Stara Zagora"
                        startDate="1991"
                        endDate="1996"
                        path="/education"
                        iconClassName="fas fa-square-root-alt"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard> */}
                    {isOpen
                        &&
                        <Popup
                            content={
                                <>
                                    <b>Courses and main subjects</b>

                                    <button>Test button</button>
                                </>
                                // contentCurrent
                            }
                            handleClose={togglePopup}
                        />
                    }

                    {/*                     
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, Branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fas fa-certificate"
                        onClickEvent={() => { }}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, Branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fas fa-ruler-combined"
                        onClickEvent={() => { }}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, Branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fas fa-shapes"
                        onClickEvent={() => { }}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, Branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fas fa-chart-line"
                        onClickEvent={() => { }}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, Branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fab fa-linode"
                        onClickEvent={() => { }}
                    >
                    </EducationCard>*/}
                </article>
            </section>
        </section>
    )
}

export default Education;