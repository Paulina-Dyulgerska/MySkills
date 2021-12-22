import "./About.css";

import TextBlockContent from "../Shared/TextBlockContent/TextBlockContent";
import ExternalNavigationItemAsSpan from "../Header/NavigationItem/ExternalNavigationItemAsSpan";

const About = () => {
    return (
        <section className="about-wrapper wrapper">
            <section className="about-container">
                <article className="about-content content">
                    <TextBlockContent
                        title="INTRODUCE"
                        primary={["Passion Heart & Soul"]}
                        secondary={["Every great PATH begin with an even better story.",
                            "My name is Paulina and I am glad that I have the opportunity to write here today and make you part of my web developer journey!"]}
                    >
                    </TextBlockContent>
                </article>
                <article className="about-info">
                    <p>
                        If I could say few words for me, they will be that for many years I
                        worked and gained experience in various fields: from economics to
                        manufacturing, engineering and regulations.During all this time I
                        keep learning, improving and upgrading myself, always with the idea
                        of being better at what I do, to understand more and more deeply the
                        details of my profession, to be able to work proactively and
                        constructively, in doing this to go through my business days with
                        quality and professionalism.
                    </p>
                    <p>
                        I have always been driven by curiosity and the desire to know, to be
                        good at what I do, to gain knowledge and develop myself.
                    </p>
                    <p>
                        I am a person who has a very fast analytical thinking and I know how
                        to deal with new information, to understand and apply it.I consider
                        myself someone who, in addition to loving to learn, does it quickly
                        and with understanding.
                    </p>
                    <p>
                        I do not have professional experience in programming, but I have
                        solved every single task given to me in the last 2 years during my
                        training in the C # track in SoftUni.I have not missed any, even
                        the ones that are not required and are marked with an asterisk mark
                        (*).I have not missed a single project either, in addition that I
                        have been trying to make them even better from what was required.In
                        many of the exams I am at 1st, 2nd or 5th place in the final
                        competition result - including the final defence of the ASP.NET Core
                        project, the C # Web Basic exam, Entity Framework Core exam, C # OOP
                        exam.
                    </p>
                    <p>
                        I want to write code and develop in this profession and I want this
                        since the years in mathematical gymnasium, when I admired the
                        knowledge of the people in this field and the whole beauty of the
                        code creation.
                    </p>
                    <p>
                        Being an engineer, I have a strong technical background, which
                        always gives me an advantage in the world of programming and code.
                        My plus is the English language and the ability to work in team.I
                        have huge experience in working in all kind of companies – from
                        small to large sizes, local to international.I could work with
                        different people from different cultures in different environments.
                        I work in large international company, with people from all over the
                        world, every day in meetings, sometimes from three continents, with
                        different kind of experts, difficult decision making and one goal
                        for all of us.I am a brilliant team player and I have always been
                        one of the most valuable player that my managers have – something
                        admired from them in my appraisals.
                    </p>
                    <p>
                        My only problem is that I want to write code because it inspires and
                        charges me and I love to create and see the result of its work.That
                        is why I am sending you this letter and a copy of my CV and
                        certificates attached.If you are interested, do not hesitate to
                        contact me by phone or e-mail:
                    </p>
                    <p><b>+359 887 684868 / paulina.dyulgerska @gmail.com</b></p>
                    <article className="projects">
                        <p><b>My projects: </b></p>
                        <ul >
                            <li className="list-item number">
                                <p><b>Conformity Check</b> - a conformities management system: </p>
                                <ExternalNavigationItemAsSpan path="https://github.com/Paulina-Dyulgerska/CSharp_ASP.NET_Core">
                                    <b>https://github.com/Paulina-Dyulgerska/CSharp_ASP.NET_Core</b>
                                </ExternalNavigationItemAsSpan>
                                <p>The project is deployed here:
                                    <ExternalNavigationItemAsSpan path="https://conformitycheck.dotnetweb.net">
                                        <b>https://conformitycheck.dotnetweb.net</b>
                                    </ExternalNavigationItemAsSpan>
                                </p>
                            </li>
                            <li className="list-item number">
                                <p><b>MySkills</b> - a professional skills presenting system: </p>
                                <ExternalNavigationItemAsSpan path="https://github.com/Paulina-Dyulgerska/MySkills">
                                    <b>https://github.com/Paulina-Dyulgerska/MySkills - front-end</b>
                                </ExternalNavigationItemAsSpan>
                                <ExternalNavigationItemAsSpan path="https://github.com/Paulina-Dyulgerska/MySkillsServer">
                                    <b>https://github.com/Paulina-Dyulgerska/MySkillsServer - back-end</b>
                                </ExternalNavigationItemAsSpan>
                                <p>The project is deployed here:
                                    <ExternalNavigationItemAsSpan path="https://myskills.dotnetweb.net">
                                        <b>https://myskills.dotnetweb.net</b>
                                    </ExternalNavigationItemAsSpan>
                                </p>
                            </li>
                        </ul>
                    </article>
                </article>
            </section>
        </section>
    );
};

export default About;
