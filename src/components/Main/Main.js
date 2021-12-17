import { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import contactsService from '../../services/contactsService';

import './Main.css';

import Home from '../Home/Home';
import About from '../About/About';
import Education from '../Education/Education';
import Certificates from '../Certificates/Certificates';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import BlogPostComments from '../Blog/BlogPostComments/BlogPostComments';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import Admin from '../Admin/Admin';
import Portfolio from '../Portfolio/Portfolio';
import ScrollTop from '../Shared/ScrollTop/ScrollTop';
import Bubbles from '../Shared/Bubbles/Bubbles';
import ThankYouRegister from '../Shared/ThankYou/ThankYouRegister';
import ThankYouContactMessageSent from '../Shared/ThankYou/ThankYouContactMessageSent';

const Main = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const parentDivRef = useRef(null);

    console.log(`${width} x ${height}`);

    //to wake up backend server:
    useEffect(() => {
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
                    <Route path="/thank-you-contact-message-sent" exact component={ThankYouContactMessageSent} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/education" component={Education}></Route>
                    <Route path="/certificates" component={Certificates}></Route>
                    <Route path="/experience" component={Experience}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/blog" component={Blog}></Route>
                    <Route path="/blogposts/:id" component={BlogPostComments}></Route>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/" exact component={Home}></Route>

                    {/* TODO <Route path="/" component={NotFound}></Route> */}
                </Switch>

            </section>
        </main>
    )
}

export default Main;