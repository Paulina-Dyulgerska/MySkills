import { Link } from 'react-router-dom';

import logo from "../../img/logo.png";
import "./Header.css";

import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import UserMenu from './UserMenu/UserMenu';
import CustomLink from '../CustomLink/CustomLink';

const Header = (props) => {
    return  (
        <header className="header">
            {/* <div class="sticky-outer-wrapper">
                <div class="sticky-inner-wrapper">

                </div>
            </div> */}
            <h1 className="site-title">
                <LogoNavigationItem path="/" src={logo} alt="Logo"></LogoNavigationItem>
                Paulina D.
            </h1>

            <button className="nav-toggler">X Menu</button>

            <nav className="nav">
                <ul className="nav-list nav-left">
                    <NavigationItem path="/home">Home</NavigationItem>
                    <NavigationItem path="/about">About</NavigationItem>
                    <NavigationItem path="/service">Service</NavigationItem>
                    <NavigationItem path="/portfolio">Portfolio</NavigationItem>
                    <NavigationItem path="/testimonial">Testimonial</NavigationItem>
                    <NavigationItem path="/blog">Blog</NavigationItem>
                    <NavigationItem path="/contact">Contact</NavigationItem>
                </ul>
                <UserMenu isUserLoggedIn={props.isUserLoggedIn}></UserMenu>
            </nav>
        </header >
    )
}

export default Header;