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

        const authorizationToken = localStorage.getItem(globalConstants.userCredentialAccessTokenJWT) 
                                || sessionStorage.getItem(globalConstants.userCredentialAccessTokenJWT);
        if (authorizationToken) {
            requestOptions.headers.Authorization = `Bearer ${authorizationToken}`;
        }

        if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
            // Build form data object.
            var urlencoded = new URLSearchParams();

            // FormData send the data az multipart/form-data, not az application/x-www-form-urlencoded, 
            // that's why I use URLSearchParams:
            // var urlencoded = new FormData();

            // date passed to the current method:
            for (const key in data) {
                // console.log(`${key}: ${data[key]}`);
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

            // requestOptions.body = data;
            requestOptions.body = urlencoded;

            // data appended to the request body:
            // for (var pair of urlencoded.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }
        }

        return requestOptions;
    }

    async function handleError(response) {
        let error;
        if (response.status === 401) {
            error = await response.text();
            throw error;
        }
        if (!response.ok) {
            //if the response error text is in a json object
            error = await response.json();
            // if the response error text is in the body as plain text, not json object:
            // error = await response.text(); 
            throw error;
        }
        return response;
    }

    async function serializeData(response) {
        return await response.json();
        // unlocks the Body Stream for more than one json():
        // return x.clone().json();
    }

    async function fetchData(url, requestOptions) {
        const promiseReturned = await fetch(url, requestOptions);
        const response = await handleError(promiseReturned);
        const jsonResponse = await serializeData(response);
        return jsonResponse;
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