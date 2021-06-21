import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import educationsService from '../../services/educationsService.js';
import experiencesService from '../../services/experiencesService.js';
import contactsService from '../../services/contactsService.js';
import accountsService from '../../services/accountsService.js';

import './Main.css';

import Home from '../Home/Home';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import ScrollTop from '../Shared/ScrollTop/ScrollTop';
import Bubbles from '../Shared/Bubbles/Bubbles';

const Main = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const parentDivRef = useRef(null);

    //to wake up backend server:
    useEffect(() => {
        accountsService.getUser()
            .catch(err => console.log(err));
        educationsService.get(1)
            .catch(err => console.log(err));
        educationsService.get()
            .catch(err => console.log(err));
        experiencesService.get()
            .catch(err => console.log(err));
        contactsService.get()
            .catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    // useLayoutEffect is used, because it is identical to useEffect, but it fires synchronously after all DOM mutations
    useEffect(() => {
        if (parentDivRef.current) {
            setWidth(parentDivRef.current.offsetWidth);
            setHeight(parentDivRef.current.offsetHeight);
        }
    }, [parentDivRef]);
    // console.log(width + " parentDivRef width")
    // console.log(window.innerWidth);
    // console.log(parentDivRef.clientWidth + " parentDivRef outer width")

    return (
        <main className="main-wrapper">
            <Bubbles></Bubbles>

            <section className="content-wrapper" ref={parentDivRef}>
                <ScrollTop parentDiv={parentDivRef}></ScrollTop>

                <aside className="sidebar">
                    ASIDE is not shown at the moment
                </aside>

                <Switch>
                    <Route path="/logout" component={Logout} />
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/education" component={Education}></Route>
                    <Route path="/experience" component={Experience}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/blog" component={Blog}></Route>
                    <Route path="/" component={Home}></Route>

                    {/* <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/pets/create" component={PetCreate}></Route>
                        <Route path="/pets/details/:id" component={PetDetails}></Route>
                        <Route path="/pets/edit/:id" component={PetEdit}></Route>
                        <Route path="/portfolio" component={Portfolio}></Route>
                        <Route path="/pets/delete/:id" component={PetDelete}></Route>

                        <Route path="/demo">
                            <DemoFormControlled></DemoFormControlled>
                            <br />
                            <DemoFormControlledRef></DemoFormControlledRef>
                            <br />
                            <DemoFormControlledFunc></DemoFormControlledFunc>
                            <br />
                            <DemoFormUncontrolled></DemoFormUncontrolled>
                        </Route> */}
                </Switch>

            </section>
        </main>
    )
}

export default Main;