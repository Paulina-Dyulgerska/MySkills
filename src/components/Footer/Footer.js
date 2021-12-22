import './Footer.css';

import ExternalNavigationItemAsLi from '../Header/NavigationItem/ExternalNavigationItemAsLi';

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer-wrapper wrapper">
            <section className="footer-content content-wrapper">
                <ul className="footer-content-social">
                    <ExternalNavigationItemAsLi path="https://www.linkedin.com/in/dyulgerska-paulina-28271583" >
                        <i className="fab fa-linkedin-in"></i>
                    </ExternalNavigationItemAsLi>
                    <ExternalNavigationItemAsLi path="https://www.facebook.com/paulina.dyulgerska" >
                        <i className="fab fa-facebook"></i>
                    </ExternalNavigationItemAsLi>
                    <ExternalNavigationItemAsLi path="https://www.twitter.com/DyulgerskaP" >
                        <i className="fab fa-twitter"></i>
                    </ExternalNavigationItemAsLi>
                </ul>
                <p className="footer-made-by">Made with love by<a href="/">&nbsp;Paulina</a></p>
                <p className="footer-copyright">&copy; {date.getFullYear()} Paulina Dyulgerska - All Rights Reserved</p>
                <ul className="footer-repos">
                    <span className="icon-sprite icon-down"></span>
                    <ExternalNavigationItemAsLi path="https://github.com/Paulina-Dyulgerska/MySkills">
                        https://github.com/Paulina-Dyulgerska/MySkills
                    </ExternalNavigationItemAsLi>
                    <ExternalNavigationItemAsLi path="https://github.com/Paulina-Dyulgerska/MySkillsServer">
                        https://github.com/Paulina-Dyulgerska/MySkillsServer
                    </ExternalNavigationItemAsLi>
                </ul>
            </section>
        </footer >
    )
}

export default Footer;