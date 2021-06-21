
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './App.css';

import accountsService from './services/accountsService';

import AuthContext from './contexts/AuthContext';

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
  const [user, setUser] = useState({
    userEmail: '',
    accessToken: localStorage.getItem('userCredentialAccessTokenJWT'),
    userRoles: [],
    expiresIn: localStorage.getItem('userCredentialJWTExpiresIn'),
  });
  // const history = useHistory();

  useEffect(() => {
    //zakacham tozi event na cheliq app i taka mi e validen navsqkyde vyv vsekq componenta po-nadolu!!!!
    // firebase.auth().onAuthStateChanged(setUser);

    // accountsService.onUserAuthStateChanged(user, setUser);
    accountsService.getUser()
      .then(res => setUser(currentState => ({
        ...currentState, 
        userEmail: res.userEmail,
        userRoles: res.userRoles
      })))
      .then(console.log(user))
      .catch(err => console.log(err));

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
      <AuthContext.Provider value={{ user, setUser }}>
        {/* <Header isUserLoggedIn={true} user={user}></Header> */}
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <section className="notifications"></section>
      </AuthContext.Provider>
    </>
  );
}

export default App;
