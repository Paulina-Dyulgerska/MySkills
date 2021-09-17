import globalConstants from '../globalConstants/globalConstants';
import baseService from './baseService';

const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';
const contentTypeFormUrlencoded = 'application/x-www-form-urlencoded';

const authentication = function () { };

authentication.login = async function (email, password, token) {
    const result = await baseService(`${accountsURL}/login`, contentTypeFormUrlencoded)
        .post({ email, password, token })
    // .then(res => console.log("ResponseHeaders:" + res.headers))
    // .then(res => console.log("Response:" + res))
    return result;
};


authentication.register = async function (email, password, confirmPassword, token) {
    const result = await baseService(`${accountsURL}/register`, contentTypeFormUrlencoded)
        .post({ email, password, confirmPassword, token });
    return result;
};

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

export default authentication;