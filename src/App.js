
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

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
      <Header isUserLoggedIn={true}></Header>
      <Main></Main>
      <Footer></Footer>
      <section className="notifications"></section>
    </>
  );
}

export default App;
