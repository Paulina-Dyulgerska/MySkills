import globalConstants from '../globalConstants/globalConstants';

const baseService = (baseURL, contentType, params) => {
    function makeRequestOptions(httpMethod, data) {
        const contentTypeHeader = contentType || 'application/json';
        const requestOptions = {
            method: httpMethod,
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': true,
                'Content-Type': contentTypeHeader,
            },
            // credentials: "include",
        }

        const authorizationToken = localStorage.getItem('userCredentialAccessTokenJWT') || sessionStorage.getItem('userCredentialAccessTokenJWT');
        if (authorizationToken) {
            requestOptions.headers.Authorization = `Bearer ${authorizationToken}`;
        }

        if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
            // Build form data object.
            var urlencoded = new URLSearchParams();
            console.log('Hi from form data object');

            for (const key in data) {
                console.log(`${key}: ${data[key]}`);
                urlencoded.append(key, data[key]);
            }

            // urlencoded.append(globalConstants.email, data[globalConstants.email]);
            // urlencoded.append(globalConstants.password, data[globalConstants.password]);
            // if (data[globalConstants.confirmPassword]) {
            //     urlencoded.append(globalConstants.confirmPassword, data[globalConstants.confirmPassword]);
            // }
            // if (data[globalConstants.token]) {
            //     urlencoded.append(globalConstants.token, data[globalConstants.token]);
            // }

            requestOptions.body = urlencoded;

            // data appended:
            for (var pair of urlencoded.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
        }

        return requestOptions;
    }

    function handleError(e) {
        if (!e.ok) {
            throw new Error(e.statusText);
        }
        return e;
    }

    function serializeData(x) {
        return x.json();
    }

    async function fetchData(url, requestOptions) {
        const e = await fetch(url, requestOptions);
        const x = await handleError(e);
        return serializeData(x);
    }

    const get = (id) => {
        const requestOptions = makeRequestOptions('GET');
        let url = `${baseURL}`;
        if (id) {
            url += `/${id}`;
        }

        return fetchData(url, requestOptions);
    }

    const post = (data) => {
        const requestOptions = makeRequestOptions('POST', data);
        const url = `${baseURL}`;

        return fetchData(url, requestOptions);
    }

    const put = (data) => {
        const requestOptions = makeRequestOptions('PUT', data);
        const url = `${baseURL}/${data.id}`;

        return fetchData(url, requestOptions);
    }

    const patch = (data) => {
        const requestOptions = makeRequestOptions('PATCH', data);
        const url = `${baseURL}/${data.id}`;

        return fetchData(url, requestOptions);
    }

    const del = (id) => {
        const requestOptions = makeRequestOptions('DELETE');
        const url = `${baseURL}/${id}`;

        return fetchData(url, requestOptions);
    }

    return {
        get,
        post,
        patch,
        put,
        del,
    };
}

export default baseService;




// import globalConstants from '../globalConstants/globalConstants';

// const baseService = (baseURL, contentType) => {
//     function makeRequestOptions(httpMethod, data) {
//         const contentTypeHeader = contentType || 'application/json';
//         const requestOptions = {
//             method: httpMethod,
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 // 'Access-Control-Allow-Credentials': true,
//                 'Content-Type': contentTypeHeader,
//             },
//             // credentials: "include",
//         }

//         const authorizationToken = localStorage.getItem('userCredentialAccessTokenJWT');
//         if (authorizationToken) {
//             requestOptions.headers.Authorization = `Bearer ${authorizationToken}`;
//         }


//         if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
//             // Build form data object.
//             var urlencoded = new URLSearchParams();
//             console.log(data[globalConstants.confirmPassword] + ' Hi from data');


//             urlencoded.append(globalConstants.email, data[globalConstants.email]);
//             urlencoded.append(globalConstants.password, data[globalConstants.password]);
//             if (data[globalConstants.confirmPassword]) {
//                 urlencoded.append(globalConstants.confirmPassword, data[globalConstants.confirmPassword]);
//             }
//             if (data[globalConstants.token]) {
//                 urlencoded.append(globalConstants.token, data[globalConstants.token]);
//             }

//             requestOptions.body = urlencoded;

//             // data appended:
//             // for (var pair of urlencoded.entries()) {
//             //     console.log(pair[0] + ', ' + pair[1]);
//             // }
//         }

//         return requestOptions;
//     }

//     function handleError(e) {
//         if (!e.ok) {
//             throw new Error(e.statusText);
//         }
//         return e;
//     }

//     function serializeData(x) {
//         return x.json();
//     }

//     async function fetchData(url, requestOptions) {
//         const e = await fetch(url, requestOptions);
//         const x = await handleError(e);
//         return serializeData(x);
//     }

//     const get = (id) => {
//         const requestOptions = makeRequestOptions('GET');
//         let url = `${baseURL}`;
//         if (id) {
//             url += `/${id}`;
//         }

//         return fetchData(url, requestOptions);
//     }

//     const post = (data) => {
//         const requestOptions = makeRequestOptions('POST', data);
//         const url = `${baseURL}`;

//         return fetchData(url, requestOptions);
//     }

//     const put = (data) => {
//         const requestOptions = makeRequestOptions('PUT', data);
//         const url = `${baseURL}/${data.id}`;

//         return fetchData(url, requestOptions);
//     }

//     const patch = (data) => {
//         const requestOptions = makeRequestOptions('PATCH', data);
//         const url = `${baseURL}/${data.id}`;

//         return fetchData(url, requestOptions);
//     }

//     const del = (id) => {
//         const requestOptions = makeRequestOptions('DELETE');
//         const url = `${baseURL}/${id}`;

//         return fetchData(url, requestOptions);
//     }

//     return {
//         get,
//         post,
//         patch,
//         put,
//         del,
//     };
// }

// export default baseService;