import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experiance from './components/Experiance/Experiance';
import Blog from './components/Blog/Blog';
// import Dashboard from './components/Dashboard/Dashboard';
// import PetDetails from './components/PetDetails/PetDetails'
// import DemoFormUncontrolled from './components/DemoForm/DemoFormUncontrolled';
// import DemoFormControlled from './components/DemoForm/DemoFormControlled';
// import DemoFormControlledRef from './components/DemoForm/DemoFormControlledRef';
// import DemoFormControlledFunc from './components/DemoForm/DemoFormControlledFunc';
// import PetCreate from './components/PetCreate/PetCreate';
// import PetEdit from './components/PetEdit/PetEdit';
// import Portfolio from './components/Portfolio/Portfolio';
// import PetDelete from './components/PetDelete/PetDelete';

function App() {
  return (
    <>
      <section className="content-wrapper">
        <Header isUserLoggedIn={true}></Header>
        <section className="page-wrapper">
          <aside className="sidebar">
            ASIDE is not shown at the moment
            </aside>
          <Switch>
            <Route path="/home" exact component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/experiance" component={Experiance}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/" component={Main}></Route>

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
        <Footer></Footer>
      </section>
      <section className="notifications">      </section>
    </>
  );
}

export default App;
