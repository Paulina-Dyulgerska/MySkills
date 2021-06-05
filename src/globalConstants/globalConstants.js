// const backendWebApiServerUrl = 'https://api.dotnetweb.net/api';
// const backendWebApiServerUrl = 'https://localhost:44319/api';
const backendWebApiServerUrl = process.env.REACT_APP_WEBAPI_URL;
const email = 'email';
const password = 'password';
const confirmPassword = 'confirmPassword';

export default {
    backendWebApiServerUrl,
    email,
    password,
    confirmPassword,
}