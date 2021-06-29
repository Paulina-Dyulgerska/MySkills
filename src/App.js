
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './App.css';

import accountsService from './services/accountsService';
import globalConstants from './globalConstants/globalConstants';
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
    accessToken: localStorage.getItem('userCredentialAccessTokenJWT') || sessionStorage.getItem('userCredentialAccessTokenJWT') ,
    userRoles: [],
    expiresIn: localStorage.getItem('userCredentialJWTExpiresIn') || sessionStorage.getItem('userCredentialJWTExpiresIn'),
  });
  const [rememberMe, setRememberMe] = useState(true);
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

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }
    // load the script by passing the URL
    loadScriptByURL("recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${globalConstants.reCaptchaSiteKey}`,
      function () {
        console.log("Script reCaptcha loaded!");
      });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, rememberMe, setRememberMe }}>
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
