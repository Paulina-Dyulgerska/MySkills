
import { useState, useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { useHistory } from 'react-router';

import './App.css';

import accountsService from './services/accountsService';
import globalConstants from './globalConstants/globalConstants';
import AuthContext from './contexts/AuthContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [user, setUser] = useState({
    userEmail: '',
    accessToken: localStorage.getItem(globalConstants.userCredentialAccessTokenJWT)
      || sessionStorage.getItem(globalConstants.userCredentialAccessTokenJWT),
    userRoles: [],
    expiresIn: localStorage.getItem(globalConstants.userCredentialJWTExpiresIn)
      || sessionStorage.getItem(globalConstants.userCredentialJWTExpiresIn),
  });
  const [rememberMe, setRememberMe] = useState(true);
  
  const hasAccessToken = localStorage.getItem(globalConstants.userCredentialAccessTokenJWT)
      || sessionStorage.getItem(globalConstants.userCredentialAccessTokenJWT);
  // const history = useHistory();

  useEffect(() => {
    if (!user.userEmail && hasAccessToken) {
      accountsService.getUser()
        .then(res => {
          setUser(currentState => ({
            ...currentState,
            userEmail: res.userEmail,
            userRoles: res.userRoles,
          }))
          return res;
        })
        // .then((res) => {
        //   console.log('hi from app.js user');
        //   console.log(user)
        //   console.log('hi from app.js res');
        //   console.log(res)
        // })
        .catch(err => console.log(err));
    }
    // console.log('hi from app.js user');
    // console.log(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        // console.log("Script reCaptcha loaded!");
      });
    // window.addEventListener('storage', syncLogout)
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
