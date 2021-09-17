import React, { useRef, useState } from 'react';
import logo from "../../img/logo.png";
import "./Header.css";

import NavigationItem from './NavigationItem/NavigationItem';
import LogoNavigationItem from './NavigationItem/LogoNavigationItem';
import UserMenu from './UserMenu/UserMenu';

const Header = (props) => {
    const menuToggler = useRef(null);

    const [isMenuTogglerChecked, setIsMenuTogglerChecked] = useState(false);

    const onChangeMenuTogglerCheckedStatus = async () => {
        setIsMenuTogglerChecked(!isMenuTogglerChecked);
    }

    const onClickNavItem = () => {
        setIsMenuTogglerChecked(false);
        // console.log('Old isMenuChecked is ' + isMenuTogglerChecked);
    }

    // console.log('Now isMenuChecked is ' + isMenuTogglerChecked);

    return (
        <header className="header-wrapper" >
            <section className="content-wrapper header-content">
                <input onChange={onChangeMenuTogglerCheckedStatus}
                    ref={menuToggler} checked={isMenuTogglerChecked}
                    className="nav-toggler" type="checkbox" name="toggle-nav" id="toggle-nav" />
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

                <nav className="nav" onClick={onClickNavItem}>
                    <ul className="nav-list nav-left">
                        <NavigationItem path="/home">Home</NavigationItem>
                        <NavigationItem path="/about">About</NavigationItem>
                        <NavigationItem path="/education">Education</NavigationItem>
                        <NavigationItem path="/experience">Experience</NavigationItem>
                        <NavigationItem path="/portfolio">Portfolio</NavigationItem>
                        <NavigationItem path="/blog">Blog</NavigationItem>
                        <NavigationItem path="/contact">Contact</NavigationItem>
                    </ul>
                    {/* <UserMenu isUserLoggedIn={props.isUserLoggedIn} user={props.user}></UserMenu> */}
                    <UserMenu></UserMenu>
                </nav>
            </section>
        </header >
    )
}

export default Header;




// const Header = (props) => {
//     const menuToggler = useRef(null);

//     const [gh, setGH] = useState(false);

//     const onClickNavMenuHandler = () => {
//         setGH(!gh);
//         console.log(gh, 'onclick');
//         console.log(menuToggler);
//     }

//     useEffect(() => {
//     }, [gh]);

//     const onChange = () => {
//         setGH(!gh);
//         console.log(gh, 'onchange');
//     }

//     return (
//         <header className="header-wrapper" >
//             <section className="content-wrapper header-content">

//                 <input onChange={onChange}
//                     ref={menuToggler} checked={gh} 
//                     className="nav-toggler" type="checkbox" name="toggle-nav" id="toggle-nav"  />

//                 {/* <div className="sticky-outer-wrapper">
//                 <div className="sticky-inner-wrapper">

//                 </div>
//                  </div> */}
//                 <article className="site-title">
//                     <LogoNavigationItem
//                         path="/"
//                         src={logo} alt="Logo"
//                         className="logo-img"
//                         logoText="Paulina D.">
//                     </LogoNavigationItem>
//                 </article>

//                 <label className="toggle-nav" htmlFor="toggle-nav">
//                     <i className="fas fa-bars"></i> Menu
//                 </label>

//                 <nav className="nav" >
//                     <ul className="nav-list nav-left" onClick={onClickNavMenuHandler}>
//                         <NavigationItem path="/home">Home</NavigationItem>
//                         <NavigationItem path="/about">About</NavigationItem>
//                         <NavigationItem path="/education">Education</NavigationItem>
//                         <NavigationItem path="/experience">Experience</NavigationItem>
//                         <NavigationItem path="/portfolio">Portfolio</NavigationItem>
//                         <NavigationItem path="/blog">Blog</NavigationItem>
//                         <NavigationItem path="/contact">Contact</NavigationItem>
//                     </ul>
//                     <UserMenu isUserLoggedIn={props.isUserLoggedIn}></UserMenu>
//                 </nav>
//             </section>
//         </header >
//     )
// }

// export default Header;