import { Link } from 'react-router-dom';

import logo from "../../img/logo.png";
import "./Header.css";

import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import UserMenu from './UserMenu/UserMenu';
import CustomLink from '../CustomLink/CustomLink';

const Header = (props) => {
    return (
        <header className="header">
            <input className="nav-toggler" type="checkbox" name="toggle-nav" id="toggle-nav" />

            {/* <div class="sticky-outer-wrapper">
                <div class="sticky-inner-wrapper">

                </div>
            </div> */}
            <h1 className="site-title">
                <LogoNavigationItem path="/" src={logo} alt="Logo"></LogoNavigationItem>
                Paulina D.
            </h1>

            <label className="toggle-nav" for="toggle-nav">
                <i className="fas fa-bars"></i> Menu
            </label>

            <nav className="nav">
                <ul className="nav-list nav-left">
                    <NavigationItem path="/home">Home</NavigationItem>
                    <NavigationItem path="/about">About</NavigationItem>
                    <NavigationItem path="/education">Education</NavigationItem>
                    <NavigationItem path="/experiance">Experiance</NavigationItem>
                    <NavigationItem path="/portfolio">Portfolio</NavigationItem>
                    <NavigationItem path="/blog">Blog</NavigationItem>
                    <NavigationItem path="/contact">Contact</NavigationItem>
                </ul>
                <UserMenu isUserLoggedIn={props.isUserLoggedIn}></UserMenu>
            </nav>
        </header >
    )
}

export default Header;