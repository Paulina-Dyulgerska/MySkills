// const backendWebApiServerUrl = 'https://api.dotnetweb.net/api';
// const backendWebApiServerUrl = 'https://localhost:44319/api';
const backendWebApiServerUrl = process.env.REACT_APP_WEBAPI_URL;
const reCaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITEKEY;
const email = 'email';
const password = 'password';
const confirmPassword = 'confirmPassword';
const token = 'token';
const userCredentialAccessTokenJWT = 'userCredentialAccessTokenJWT';
const userCredentialJWTExpiresIn = 'userCredentialJWTExpiresIn';
const rememberMe = 'rememberMe';

const globalConstants = {
    backendWebApiServerUrl,
    reCaptchaSiteKey,
    email,
    password,
    confirmPassword,
    token,
    userCredentialAccessTokenJWT,
    userCredentialJWTExpiresIn,
    rememberMe,
}
export default globalConstants;