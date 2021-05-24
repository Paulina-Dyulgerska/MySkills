import './Blog.css';
import { useState } from 'react';


const Blog = () => {
    const [demoState, setDemoState] = useState({
        count: 111,
        step: 1,
    });

    const onCounterButtonClickHandler = () => {
        console.log('IncreaseB' + demoState.count);
        // setDemoState(currentState => ({ step: currentState.step, count: currentState.count + 1 })); //towa e === na towa:
        setDemoState(currentState => ({ ...currentState, count: currentState.count + 1 })); //iskam da 
        //vzemesh vsichko ot currentState i da mu prezapishe stojnostta na count s currentState.count + 1!!!!
        console.log('IncreaseA' + demoState.count);
    }

    const onStepChangeHandler = (e) => {
        const stepValue = Number(e.target.value);
        // setDemoState(currentState => ({ step: stepValue, count: currentState.count })); //towa e === na towa:
        setDemoState(currentState => ({ ...currentState, step: stepValue })); //iskam da vzemesh vsichko ot 
        //currentState i da mu prezapishe stojnostta na step s stepValue!!!!!!
    }

    return (
        // <div classNameName="icon-wrapper">
        //     <a>Career Blog </a>
        //     <span classNameName="icon-sprite icon-down"></span>
        // </div>

        //TODO - vote, rank and propose articles, sort atricles by newest ones and the highest ranking ones!!!!!
        <>
            <div className="demo">
                <h1>Voting</h1>
                <label htmlFor="step">Score</label>
                <select name="step" id="step" onChange={onStepChangeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <div>{demoState.count * demoState.step}</div>
                <button onClick={onCounterButtonClickHandler}>Vote</button>
            </div>

            <nav id="header-extra-layer">
                <a href="https://novoresume.com?noRedirect=true" className="holder-logo"> <span className="logo"></span> <span className="logo-text"></span> </a>
                <div id="novo-nav-menu">
                    <div id="novo-nav-hd">
                        <ul id="nav-top">
                            <li id="nav-btn-signup"> <a className="btn-trigger-mp btnv-1" mp-type="mode-signup">Register</a> </li>
                            <li id="nv-hd-signin"> <a className="btn-trigger-mp btnv-3" mp-type="mode-signin">Sign In</a> </li>
                        </ul>
                        <ul id="nav-mid">
                            <li> <a href="https://novoresume.com/resume-templates" className="btn-nvt-gm" data-nvt-action="cta_resume_templates">Resume Templates</a> </li>
                            <li> <a href="https://novoresume.com/cv-templates" className="btn-nvt-gm" data-nvt-action="cta_cv_templates">CV Templates</a> </li>
                            <li> <a href="https://novoresume.com/cover-letter-templates" className="btn-nvt-gm" data-nvt-action="cta_cover_letter_templates">Cover Letters</a> </li>
                            <li className="holder-quick-nav-submenu cblog">
                                <a>Career Blog </a> <span className="icon-sprite icon-down"></span>
                                <div className="container-quick-nav-submenu">
                                    <div className="quick-nav-submenu">
                                        <div className="quick-nav-submenu-links clearfix-after">
                                            <a href="https://novoresume.com/career-blog">All Articles</a>
                                            <a href="https://novoresume.com/career-blog/write-resume-cv">Resume &amp; CV Writing</a>
                                            <a href="https://novoresume.com/career-blog/create-cover-letter">Cover Letter Writing</a>
                                            <a href="https://novoresume.com/career-blog/examples">Examples</a>
                                            <a href="https://novoresume.com/career-blog/personal-development-advice">Personal Development</a>
                                            <a href="https://novoresume.com/career-blog/inspiring-motivational-stories">Inspiring Stories</a>
                                            <a href="https://novoresume.com/career-blog/find-a-job">Interviews &amp; Find A Job</a> </div>
                                    </div>
                                </div>
                            </li>
                            <li className="holder-pricing"> <a href="https://novoresume.com/page/pricing" className="btn-nvt-gm" data-nvt-action="cta_pricing">Pricing</a> </li>
                            <li className="holder-quick-nav-submenu mlang">
                                <span className="icon-sprite icon-lang"></span> <a>EN US</a> <span className="icon-sprite icon-down"></span>
                                <div className="container-quick-nav-submenu">
                                    <div className="quick-nav-submenu">
                                        <div className="quick-nav-submenu-links clearfix-after"> <a data-nlangcode="da">Dansk <span className="m-lang-beta">BETA</span></a> <a data-nlangcode="de">Deutsch <span className="m-lang-beta">BETA</span></a> <a data-nlangcode="en-US" className="selected">English US</a> <a data-nlangcode="en-GB">English UK</a> <a data-nlangcode="es">Español <span className="m-lang-beta">BETA</span></a> </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul id="nav-misc">
                            <li> <a href="https://novoresume.com/about-us">About Us</a> </li>
                        </ul>
                        <div id="nav-ft"> <a className="icon-sprite in" href="https://www.linkedin.com/company/novor%C3%A9sum%C3%A9" target="_blank"></a> <a className="icon-sprite fb" href="https://www.facebook.com/novoresume" target="_blank"></a> <a className="icon-sprite tw" href="https://twitter.com/Novoresume/" target="_blank"></a> <a className="icon-sprite is" href="https://www.instagram.com/novoresumecreative" target="_blank"></a> <a href="mailto:contact@novoresume.com" className="contact-email">contact@novoresume.com</a> </div>
                    </div>
                </div>
                <div id="holder-btn-nav">
                    <div id="btn-nav"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
                </div>
            </nav>
        </>
    )
}

export default Blog;