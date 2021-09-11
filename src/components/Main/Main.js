// import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import educationsService from '../../services/educationsService';
import experiencesService from '../../services/experiencesService';
import contactsService from '../../services/contactsService';
import accountsService from '../../services/accountsService';

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
import Admin from '../Admin/Admin';
import ScrollTop from '../Shared/ScrollTop/ScrollTop';
import Bubbles from '../Shared/Bubbles/Bubbles';
import ThankYouRegister from '../Shared/ThankYou/ThankYouRegister';

const Main = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const parentDivRef = useRef(null);

    console.log(`${width} x ${height}`);

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
                    <Route path="/thank-you-register" exact component={ThankYouRegister} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/education" component={Education}></Route>
                    <Route path="/experience" component={Experience}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/blog" component={Blog}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/" exact component={Home}></Route>

                    {/* TODO <Route path="/" component={NotFound}></Route> */}

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