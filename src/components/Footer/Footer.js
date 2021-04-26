import './Footer.css';
import NavigationItem from '../Header/NavigationItem/NavigationItem';

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer-wrapper">
            <section className="footer-content content-wrapper">
                <ul className="footer-content-social">
                    <NavigationItem path="https://www.linkedin.com/in/dyulgerska-paulina-28271583">
                        <i className="fab fa-linkedin-in"></i>
                    </NavigationItem>
                    <NavigationItem path="https://www.facebook.com/paulina.dyulgerska">
                        <i className="fab fa-facebook"></i>
                    </NavigationItem>
                    <NavigationItem path="https://www.twitter.com/DyulgerskaP">
                        <i className="fab fa-twitter"></i>
                    </NavigationItem>
                </ul>
                <p className="footer-made-by">Made with love by<a href="/">&nbsp;Paulina</a></p>
                <p className="footer-copyright">&copy; {date.getFullYear()} Paulina Dyulgerska - All Rights Reserved</p>
            </section>
        </footer >
    )
}

export default Footer;