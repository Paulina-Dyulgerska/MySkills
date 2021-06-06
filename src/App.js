
import { useState, useEffect } from 'react';

import accountsService from './services/accountsService';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useHistory } from 'react-router';

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
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    //zakacham tozi event na cheliq app i taka mi e validen navsqkyde vyv vsekq componenta po-nadolu!!!!
    // firebase.auth().onAuthStateChanged(setUser);
    accountsService.onUserAuthStateChanged(user, setUser);
    (async () => {
      try {
        const currentUser = await accountsService.getUser();
        setUser(currentUser);
        console.log(currentUser);
      } catch (ex) {
        var errorCode = ex.code;
        var errorMessage = ex.message;
        // setErrorMessage(errorMessage);
        console.log(errorCode, errorMessage);
      }
    })()



    // window.addEventListener('storage', syncLogout)

    // const syncLogout = (e) => {
    //   if (e.key === 'logout') {
    //     console.log('logged out from storage!')
    //     history.push('/login')
    //   }
    // }
  }, []);

  return (
    <>
      <Header isUserLoggedIn={true} user={user}></Header>
      <Main></Main>
      <Footer></Footer>
      <section className="notifications"></section>
    </>
  );
}

export default App;
