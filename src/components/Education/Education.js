import './Education.css';

import Bubbles from '../Shared/Bubbles/Bubbles';
import ButtonCta from '../Shared/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';

import imgPolygon from "../../img/polygon.png";


const Education = () => {
    return (
        <section className="education-wrapper">
            <Bubbles></Bubbles>
            <section className="education-container">
                <article className="education-content">
                    {/* <img src={imgPolygon} alt="" className="polygon" /> */}
                    <TextBlockContent
                        title="This is my Passion Heart &amp; Soul"
                        primary={["Every great success is based on great many trainings"]}
                        secondary={["I have studied all my life. Some people are asking me: Why?",
                            "The simples answer is: Because I love knowedge and I want to know how the things are working, how the World is running and I could not stay a day without discovering at least one new thing. This is the human nature for me and I try to be a human."]}
                    >
                    </TextBlockContent>
                    <ButtonCta>Download CV</ButtonCta>
                </article>
                <article className="education-skills">
                    <article className="item">
                        <h3>Design</h3>
                        <p>Create digital products with unique idea</p>
                        <a href=".#">20 Projects</a><span className="icon icon-tools"><i class="fas fa-tools"></i></span>
                    </article>
                    <article className="item">
                        <h3>front-End</h3>
                        <p>My coding structure is clean and smooth</p>
                        <a href=".#">165 Projects</a><span className="icon icon-genius"><i class="fas fa-satellite"></i></span>
                    </article>
                    <article className="item">
                        <h3>Design</h3>
                        <p>Create digital products with unique idea</p>
                        <a href=".#">20 Projects</a><span className="icon icon-tools"><i class="fab fa-linode"></i></span>
                    </article>
                    <article className="item">
                        <h3>front-End</h3>
                        <p>My coding structure is clean and smooth</p>
                        <a href=".#">165 Projects</a><span className="icon icon-genius"><i class="fas fa-chart-line"></i></span>
                    </article>
                    <article className="item">
                        <h3>SEO</h3>
                        <p>Boost your business with SEO optimize.</p>
                        <a href=".#">5 Projects</a><span className="icon icon-linegraph"><i class="fas fa-square-root-alt"></i></span>
                    </article>
                    <article className="item">
                        <h3>Design</h3>
                        <p>Create digital products with unique idea</p>
                        <a href=".#">20 Projects</a><span className="icon icon-tools"><i class="fas fa-ruler-combined"></i></span>
                    </article>
                    <article className="item">
                        <h3>front-End</h3>
                        <p>My coding structure is clean and smooth</p>
                        <a href=".#">165 Projects</a><span className="icon icon-genius"><i class="fab fa-react"></i></span>
                    </article>
                    <article className="item">
                        <h3>SEO</h3>
                        <p>Boost your business with SEO optimize.</p>
                        <a href=".#">5 Projects</a><span className="icon icon-linegraph"><i class="fas fa-laptop"></i></span>
                    </article>
                    <article className="item">
                        <h3>SEO</h3>
                        <p>Boost your business with SEO optimize.</p>
                        <a href=".#">5 Projects</a><span className="icon icon-linegraph"><i class="fas fa-shapes"></i></span>
                    </article>
                    <article className="item">
                        <h3>SEO</h3>
                        <p>Boost your business with SEO optimize.</p>
                        <a href=".#">5 Projects</a><span className="icon icon-linegraph"><i class="fas fa-certificate"></i></span>
                    </article>
                </article>
            </section>
        </section>
    )
}

export default Education;