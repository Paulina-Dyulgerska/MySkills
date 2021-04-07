import { useState } from 'react';

import './Education.css';

import Bubbles from '../Shared/Bubbles/Bubbles';
import ButtonCta from '../Shared/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';
import EducationCard from '../Education/EducationCard/EducationCard';
import Popup from '../Shared/Popup/Popup';

import imgPolygon from "../../img/polygon.png";


const Education = () => {
    const [contentCurrent, setContentCurrent] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (contentClicked) => {
        setIsOpen(!isOpen);
        setContentCurrent(contentClicked)
    }
    return (
        <section className="education-wrapper">
            <Bubbles></Bubbles>
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
                    <EducationCard
                        degree="Professional degree: CPE"
                        speciality="C# Web Developer (Full Stack)"
                        university="Software University"
                        period="2019 – 2021"
                        path="/education"
                        iconClassName="fas fa-laptop"
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MAcc"
                        speciality="Accounting, Economics"
                        university="University of Plovdiv"
                        period="2005 – 2007"
                        path="/education"
                        iconClassName="fas fa-chart-line"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="Master degree: MEng"
                        speciality="Automation, Information and Control Systems"
                        university="Technical University – Sofia, branch Plovdiv"
                        period="1997 – 2003"
                        path="/education"
                        iconClassName="fas fa-tools"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    <EducationCard
                        degree="High School"
                        speciality="Mathematics and English"
                        university="High School of Mathematics - Stara Zagora"
                        period="1991 – 1996"
                        path="/education"
                        iconClassName="fas fa-shapes"
                        onClickEvent={() => { }}
                        onClickTogglePopup={togglePopup}
                    >
                    </EducationCard>
                    {isOpen
                        &&
                        <Popup
                            content={
                                <>
                                    <b>Courses and main subjects</b>
                                    <p>
                                        C# Programming Basic, C# Fundamentals, C# Advanced, C# OOP, JS Advanced,
                                        JS Applications, Databases Basics - MS SQL Server, Entity Framework Core,
                                        C# Web Basics, HTML &amp; CSS, ASP.NET Core, React
                                            </p>
                                    <p>
                                        Production Automation, Informatics, Electrical Engineering, Mathematics,
                                        Physics and Chemistry
                                            </p>
                                    <p>
                                        Accounting, Corporate Analysis, Industrial Management, Macroeconomics,
                                        Microeconomics, Marketing, Statistics, Finance, Labor Economics,
                                        Taxes and Tax Policy
                                            </p>
                                    <p>
                                        Mathematics and English
                                            </p>
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
                        iconClassName="fas fa-square-root-alt"
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