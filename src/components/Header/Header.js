// import { Link } from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import logo from "../../img/logo.png";
import "./Header.css";

import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import UserMenu from './UserMenu/UserMenu';

const Header = (props) => {
    const menuToggler = useRef(null);

    const [gh, setGH] = useState(false);

    const onClickNavMenuHandler = () => {
        setGH(!gh);
        console.log(gh, 'onclick');
        console.log(menuToggler);
    }

    useEffect(() => {
    }, [gh]);

    const onChange = () => {
        setGH(!gh);
        console.log(gh, 'onchange');
    }

    return (
        <header className="header-wrapper" >
            <section className="content-wrapper header-content">

                <input onChange={onChange}
                    ref={menuToggler} checked={gh} 
                    className="nav-toggler" type="checkbox" name="toggle-nav" id="toggle-nav"  />

                {/* <div className="sticky-outer-wrapper">
                <div className="sticky-inner-wrapper">

                </div>
                 </div> */}
                <article className="site-title">
                    <LogoNavigationItem
                        path="/"
                        src={logo} alt="Logo"
                        className="logo-img"
                        logoText="Paulina D.">
                    </LogoNavigationItem>
                </article>

                <label className="toggle-nav" htmlFor="toggle-nav">
                    <i className="fas fa-bars"></i> Menu
                </label>

                <nav className="nav" >
                    <ul className="nav-list nav-left" onClick={onClickNavMenuHandler}>
                        <NavigationItem path="/home">Home</NavigationItem>
                        <NavigationItem path="/about">About</NavigationItem>
                        <NavigationItem path="/education">Education</NavigationItem>
                        <NavigationItem path="/experience">Experience</NavigationItem>
                        <NavigationItem path="/portfolio">Portfolio</NavigationItem>
                        <NavigationItem path="/blog">Blog</NavigationItem>
                        <NavigationItem path="/contact">Contact</NavigationItem>
                    </ul>
                    <UserMenu isUserLoggedIn={props.isUserLoggedIn}></UserMenu>
                </nav>
            </section>
        </header >
    )
}

export default Header;