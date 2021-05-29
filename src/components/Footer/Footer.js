import { Link } from 'react-router-dom';
import './Footer.css';
import ExternalNavigationItem from '../Header/NavigationItem/ExternalNavigationItem';

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer-wrapper">
            <section className="footer-content content-wrapper">
                <ul className="footer-content-social">
                    <ExternalNavigationItem path="https://www.linkedin.com/in/dyulgerska-paulina-28271583" >
                        <i className="fab fa-linkedin-in"></i>
                    </ExternalNavigationItem>
                    <ExternalNavigationItem path="https://www.facebook.com/paulina.dyulgerska" >
                        <i className="fab fa-facebook"></i>
                    </ExternalNavigationItem>
                    <ExternalNavigationItem path="https://www.twitter.com/DyulgerskaP" >
                        <i className="fab fa-twitter"></i>
                    </ExternalNavigationItem>
                </ul>
                <p className="footer-made-by">Made with love by<a href="/">&nbsp;Paulina</a></p>
                <p className="footer-copyright">&copy; {date.getFullYear()} Paulina Dyulgerska - All Rights Reserved</p>
            </section>
        </footer >
    )
}

export default Footer;