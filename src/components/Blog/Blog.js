import './Blog.css';

const Blog = () => {
    return (
        // <div className="icon-wrapper">
        //     <a>Career Blog </a>
        //     <span className="icon-sprite icon-down"></span>
        // </div>

        <nav id="header-extra-layer">
            <a href="https://novoresume.com?noRedirect=true" class="holder-logo"> <span class="logo"></span> <span class="logo-text"></span> </a>
            <div id="novo-nav-menu">
                <div id="novo-nav-hd">
                    <ul id="nav-top">
                        <li id="nav-btn-signup"> <a class="btn-trigger-mp btnv-1" mp-type="mode-signup">Register</a> </li>
                        <li id="nv-hd-signin"> <a class="btn-trigger-mp btnv-3" mp-type="mode-signin">Sign In</a> </li>
                    </ul>
                    <ul id="nav-mid">
                        <li> <a href="https://novoresume.com/resume-templates" class="btn-nvt-gm" data-nvt-action="cta_resume_templates">Resume Templates</a> </li>
                        <li> <a href="https://novoresume.com/cv-templates" class="btn-nvt-gm" data-nvt-action="cta_cv_templates">CV Templates</a> </li>
                        <li> <a href="https://novoresume.com/cover-letter-templates" class="btn-nvt-gm" data-nvt-action="cta_cover_letter_templates">Cover Letters</a> </li>
                        <li class="holder-quick-nav-submenu cblog">
                            <a>Career Blog </a> <span class="icon-sprite icon-down"></span>
                            <div class="container-quick-nav-submenu">
                                <div class="quick-nav-submenu">
                                    <div class="quick-nav-submenu-links clearfix-after">
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
                        <li class="holder-pricing"> <a href="https://novoresume.com/page/pricing" class="btn-nvt-gm" data-nvt-action="cta_pricing">Pricing</a> </li>
                        <li class="holder-quick-nav-submenu mlang">
                            <span class="icon-sprite icon-lang"></span> <a>EN US</a> <span class="icon-sprite icon-down"></span>
                            <div class="container-quick-nav-submenu">
                                <div class="quick-nav-submenu">
                                    <div class="quick-nav-submenu-links clearfix-after"> <a data-nlangcode="da">Dansk <span class="m-lang-beta">BETA</span></a> <a data-nlangcode="de">Deutsch <span class="m-lang-beta">BETA</span></a> <a data-nlangcode="en-US" class="selected">English US</a> <a data-nlangcode="en-GB">English UK</a> <a data-nlangcode="es">Español <span class="m-lang-beta">BETA</span></a> </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul id="nav-misc">
                        <li> <a href="https://novoresume.com/about-us">About Us</a> </li>
                    </ul>
                    <div id="nav-ft"> <a class="icon-sprite in" href="https://www.linkedin.com/company/novor%C3%A9sum%C3%A9" target="_blank"></a> <a class="icon-sprite fb" href="https://www.facebook.com/novoresume" target="_blank"></a> <a class="icon-sprite tw" href="https://twitter.com/Novoresume/" target="_blank"></a> <a class="icon-sprite is" href="https://www.instagram.com/novoresumecreative" target="_blank"></a> <a href="mailto:contact@novoresume.com" class="contact-email">contact@novoresume.com</a> </div>
                </div>
            </div>
            <div id="holder-btn-nav">
                <div id="btn-nav"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
            </div>
        </nav>
    )
}

export default Blog;