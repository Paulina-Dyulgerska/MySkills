import globalConstants from '../globalConstants/globalConstants';
import baseService from './baseService';

const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';
// const contentTypeFormMultipart = 'multipart/form-data';

// const auth = baseService(accountsURL, contentTypeFormUrlencoded);

const authentication = function () { };

authentication.login = async function (email, password, token) {
    const result = await baseService(`${accountsURL}/login`, contentTypeFormUrlencoded)
        .post({ email, password, token })
    // .then(res => console.log("ResponseHeaders:" + res.headers))
    // .then(res => console.log("Response:" + res))
    return result;
};

// authentication.login = async function (email, password, token) {
//     return new Promise((resolve, reject) => {
//         baseService(`${accountsURL}/login`, contentTypeFormUrlencoded)
//             .post({ email, password, token })
//             // .then(res => console.log("ResponseHeaders:" + res.headers))
//             // .then(res => console.log("Response:" + res))
//             .then((res) => resolve(res))
//             .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
//     });
// };

authentication.register = async function (email, password, confirmPassword, token) {
    // console.log(email, password, token, 2);
    const result = await baseService(`${accountsURL}/register`, contentTypeFormUrlencoded)
        .post({ email, password, confirmPassword, token });
    return result;
};

// authentication.register = async function (email, password, confirmPassword, token) {
//     return new Promise((resolve, reject) => {
//         if (password !== confirmPassword || password === '' || confirmPassword === '') {
//             console.log(email, password, ' from front end');
//             reject(new Error('Password fields must match and not be empty.'));
//         } else {
//             console.log(email, password, token, 2);
//             baseService(`${accountsURL}/register`, contentTypeFormUrlencoded)
//                 .post({ email, password, confirmPassword, token })
//                 .then((res) => resolve(res))
//                 .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
//         }
//     });
// };

authentication.logout = async function () {
    // return new Promise((resolve, reject) => {
    //     baseService(`${accountsURL}/logout`).post()
    //         .then((res) => resolve(res))
    //         .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
    // });
};

authentication.getUser = async function () {
    const result = await baseService(`${accountsURL}`).get()
    return result;
};

// authentication.getUser = async function () {
//     return new Promise((resolve, reject) => {
//         baseService(`${accountsURL}`).get()
//             .then((res) => resolve(res))
//             .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
//     });
// };

// authentication.onUserAuthStateChanged = function (user, setUser) {
//     if (localStorage.getItem('userEmail')) {
//         console.log("Logged In");
//         setUser({userEmail: localStorage.userEmail, });
//     } else {
//         setUser(null);
//         console.log("Logged out");
//     }
// }
// authentication.onUserAuthStateChanged();

export default authentication;


// import globalConstants from '../globalConstants/globalConstants';
// import baseService from './baseService';

// const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';
// const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';
// // const contentTypeFormMultipart = 'multipart/form-data';

// // const auth = baseService(accountsURL, contentTypeFormUrlencoded);

// const authentication = function () { };

// authentication.login = async function (email, password, token) {
//     return new Promise((resolve, reject) => {
//         baseService(`${accountsURL}/login`, contentTypeFormUrlencoded)
//             .post({email, password, token})
//             // .then(res => console.log("ResponseHeaders:" + res.headers))
//             // .then(res => console.log("Response:" + res))
//             .then((res) => resolve(res))
//             .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
//     });
// };

// authentication.register = async function (email, password, confirmPassword, token) {
//     return new Promise((resolve, reject) => {
//         if (password !== confirmPassword || password === '' || confirmPassword === '') {
//             console.log(email, password, ' from front end');
//             reject(new Error('Password fields must match and not be empty.'));
//         } else {
//             console.log(email, password, token, 2);
//             baseService(`${accountsURL}/register`, contentTypeFormUrlencoded)
//                 .post({ email, password, confirmPassword, token })
//                 .then((res) => resolve(res))
//                 .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
//         }
//     });
// };

// authentication.logout = async function () {
//     // return new Promise((resolve, reject) => {
//     //     baseService(`${accountsURL}/logout`).post()
//     //         .then((res) => resolve(res))
//     //         .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
//     // });
// };

// authentication.getUser = async function () {
//     return new Promise((resolve, reject) => {
//         baseService(`${accountsURL}`).get()
//             .then((res) => resolve(res))
//             .catch((reason) => reject(reason)); //to catch a throw, otherwise "Uncaught error"!!!!!
//     });
// };

// // authentication.onUserAuthStateChanged = function (user, setUser) {
// //     if (localStorage.getItem('userEmail')) {
// //         console.log("Logged In");
// //         setUser({userEmail: localStorage.userEmail, });
// //     } else {
// //         setUser(null);
// //         console.log("Logged out");
// //     }
// // }
// // authentication.onUserAuthStateChanged();

// export default authentication;