// const backendWebApiServerUrl = 'https://api.dotnetweb.net/api';
// const backendWebApiServerUrl = 'https://localhost:44319/api';
const backendWebApiServerUrl=process.env.REACT_APP_WEBAPI_URL;

export default {
    backendWebApiServerUrl,
}