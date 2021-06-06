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
            .then((res) => { localStorage.setItem('userEmail', res.UserEmail) })
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

authentication.logout = function () {
    localStorage.removeItem('userCredentialAccessTokenJWT');
    localStorage.removeItem('userEmail');

    // return new Promise((resolve, reject) => {
    //     baseService(`${accountsURL}/logout`).post()
    //         .then((res) => resolve(res))
    //         .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
    // });
};

authentication.getUser = async function () {
    return new Promise((resolve, reject) => {
        baseService(`${accountsURL}`).get()
            .then((res) => resolve(res.userEmail))
            // .then((res) => { localStorage.setItem('userEmail', res.UserEmail) })
            .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
    });
};

authentication.onUserAuthStateChanged = function (user, setUser) {
    if (localStorage.getItem('userEmail')) {
        console.log("Logged In");
        setUser(localStorage.getItem('userEmail'));
    } else {
        setUser(null);
        console.log("Logged out");
    }
}
// authentication.onUserAuthStateChanged();

export default authentication;