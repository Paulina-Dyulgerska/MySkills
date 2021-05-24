import baseService from './baseService';
import globalConstants from '../globalConstants/globalConstants';

// const experiencesURL = 'https://localhost:44319/api/experiences';
// const experiencesURL = 'http://www.dotnetweb.net/api/experiences';
const experiencesURL = globalConstants.backendWebApiServerUrl + '/experiences';

export default baseService(experiencesURL);



// const baseURL = 'https://localhost:44319/api/experiences';

// function makeHeaders(httpMethod, data) {
//     const headers = {
//         method: httpMethod,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             "Content-Type": "application/json",
//         }
//     }

//     if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
//         headers.body = JSON.stringify(data);
//     }

//     return headers;
// }

// function handleError(e) {
//     if (!e.ok) {
//         throw new Error(e.statusText);
//     }
//     return e;
// }

// function serializeData(x) {
//     return x.json();
// }

// async function fetchData(url, headers) {
//     const e = await fetch(url, headers);
//     const x = await handleError(e);
//     return serializeData(x);
// }

// const getAll = () => {
//     const headers = makeHeaders('GET');
//     const url = `${baseURL}`;

//     return fetchData(url, headers);
// }

// const getOne = (id) => {
//     const headers = makeHeaders('GET');
//     const url = `${baseURL}/${id}`;

//     return fetchData(url, headers);
// }

// const post = (data) => {
//     const headers = makeHeaders('POST', data);
//     const url = `${baseURL}`;

//     return fetchData(url, headers);
// }

// const put = (data) => {
//     const headers = makeHeaders('PUT', data);
//     const url = `${baseURL}/${data.id}`;

//     return fetchData(url, headers);
// }

// const patch = (data) => {
//     const headers = makeHeaders('PATCH', data);
//     const url = `${baseURL}/${data.id}`;

//     return fetchData(url, headers);
// }

// const del = (id) => {
//     const headers = makeHeaders('DELETE');
//     const url = `${baseURL}/${id}`;

//     return fetchData(url, headers);
// }

// export {
//     getAll,
//     getOne,
//     post,
//     patch,
//     put,
//     del,
// };