import { useEffect, useState, useRef } from 'react';

import './Portfolio.css';

import PortfolioCard from './PortfolioCard/PortfolioCard';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';

import articlesAll from "../../img/Portfolio/ArticlesAll.png";
import addConformityToArtcile from "../../img/Portfolio/AddConformityToArtcile.png";
import login from "../../img/Portfolio/Login.png";
import createConformity from "../../img/Portfolio/CreateConformity.png";
import conformitiesAll from "../../img/Portfolio/ConformitiesAll.png";

const Portfolio = () => {

    const projects = [articlesAll,
        addConformityToArtcile,
        login,
        createConformity,
        conformitiesAll,
    ];


    const delay = 4000;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === projects.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index, projects.length]);

    const title = 'Conformity Check';
    const details = 'Conformities Management System';
    const url = 'https://conformitycheck.dotnetweb.net';

    return (
        < section className="portfolio-wrapper wrapper" >
            <section className="portfolio-container">
                <article className="portfolio-content content">
                    <TextBlockContent
                        title="My portfolio"
                        primary={["Every great success is based on hard work."]}
                        secondary={["After so many training I am able to create web sites like the ones below.",
                            "You could follow the link and enjoy the site in a separate tab.",
                            "Call me if you like it!"]}
                    >
                    </TextBlockContent>
                    <span className="bottom_line"></span>
                </article>
                <article className="slideshow">
                    <article className="slideshowSlider"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {projects.map((imageSrc, index) => (
                            <PortfolioCard
                                key={index}
                                imageSrc={imageSrc}
                                title={title}
                                details={details}
                                url={url}
                            >
                            </PortfolioCard>
                        ))}
                    </article>
                    <article className="slideshowDots">
                        {projects.map((_, idx) => (
                            <article
                                key={idx}
                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></article>
                        ))}
                    </article>
                </article>
            </section>
        </section >
    );
}

export default Portfolio;

// <section className="portfolio_slider_area" id="portfolio">
        //     <div className="container">
        //         <div className="section_title_two text-center">
        //             <h6>My Portfolio</h6>
        //             <h2>Some of my latest works.</h2>
        //         </div>
        //         <div className="slick-slider portfolio_slider slick-initialized" dir="ltr">
        //             <div className="slick-list">
        //                 <div className="slick-track">
        //                     <div data-index="-2" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio2.35b5680d.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Creative Design</h4>
        //                                         </a>
        //                                         <a href=".#">App Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="-1" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio1.27473693.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>John Portfolio Logo</h4>
        //                                         </a>
        //                                         <a href=".#">UI/UX Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="0" className="slick-slide" tabindex="-1" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/new1.b3c89bef.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Poluchoromatic Logo</h4>
        //                                         </a>
        //                                         <a href=".#">Branding Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="1" className="slick-slide" tabindex="-1" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio1.27473693.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Poluchoromatic Logo</h4>
        //                                         </a>
        //                                         <a href=".#">Logo Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="2" className="slick-slide" tabindex="-1" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio2.35b5680d.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Creative Design</h4>
        //                                         </a>
        //                                         <a href=".#">App Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="3" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio1.27473693.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>John Portfolio Logo</h4>
        //                                         </a>
        //                                         <a href=".#">UI/UX Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="4" tabindex="-1" className="slick-slide slick-active slick-cloned" aria-hidden="false">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/new1.b3c89bef.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Poluchoromatic Logo</h4>
        //                                         </a>
        //                                         <a href=".#">Branding Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="5" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio1.27473693.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Poluchoromatic Logo</h4>
        //                                         </a>
        //                                         <a href=".#">Logo Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="6" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio2.35b5680d.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>Creative Design</h4>
        //                                         </a>
        //                                         <a href=".#">App Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div data-index="7" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true">
        //                         <div>
        //                             <div className="p_item" tabindex="-1">
        //                                 <div className="portfolio_content">
        //                                     <a href="./">
        //                                         <img src="/static/media/portfolio1.27473693.jpg" alt=""/>
        //                                     </a>
        //                                     <div className="text">
        //                                         <a href="./">
        //                                             <h4>John Portfolio Logo</h4>
        //                                         </a>
        //                                         <a href=".#">UI/UX Design</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <ul className="slick-dots">
        //                 <li className="">
        //                     <button>1</button>
        //                 </li>
        //                 <li className="slick-active">
        //                     <button>2</button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>