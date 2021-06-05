import globalConstants from '../globalConstants/globalConstants';
import baseService from './baseService';

const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';
// const contentTypeFormMultipart = 'multipart/form-data';

// const auth = baseService(accountsURL, contentTypeFormUrlencoded);

const authentication = function () { };

authentication.login = async function (email, password) {
    return new Promise((resolve, reject) => {
        baseService(`${accountsURL}/login`, contentTypeFormUrlencoded).post(email, password)
            // .then(res => console.log("ResponseHeaders:" + res.headers))
            // .then(res => console.log("Response:" + res))
            .then((res) => resolve(res))
            .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
    });
};

authentication.register = async function (email, password, confirmPassword) {
    return new Promise((resolve, reject) => {
        if (password !== confirmPassword || password === '' || confirmPassword === '') {
            console.log(email, password, ' from front end');
            reject(new Error('Password fields must match and not be empty.'));
        } else {
            console.log(email, password, 2);
            baseService(`${accountsURL}/register`, contentTypeFormUrlencoded).post(email, password, confirmPassword)
                .then((res) => resolve(res))
                .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
        }
    });
};

authentication.logout =  function () {
    localStorage.removeItem('userCredentialAccessTokenJWT');
    // return new Promise((resolve, reject) => {
    //     baseService(`${accountsURL}/logout`).post()
    //         .then((res) => resolve(res))
    //         .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
    // });
};

authentication.onUserAuthStateChanged = function (user, setUser) {
    baseService(`${accountsURL}`).onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(user);
            console.log(uid);
            console.log("Logged In")
        } else {
            // User is signed out
            console.log("Logged out")
        }
        setUser(user);
    });
}
// authentication.onUserAuthStateChanged();

export default authentication;