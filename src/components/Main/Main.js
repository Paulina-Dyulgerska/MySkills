import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.css';

import Home from '../Home/Home';
import About from '../About/About';
import Education from '../Education/Education';
import Experiance from '../Experiance/Experiance';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import ScrollTop from '../Shared/ScrollTop/ScrollTop';
import Bubbles from '../Shared/Bubbles/Bubbles';

const Main = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const parentDivRef = useRef(null);

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
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/education" component={Education}></Route>
                    <Route path="/experiance" component={Experiance}></Route>
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