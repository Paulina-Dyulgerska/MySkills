import globalConstants from '../globalConstants/globalConstants';

const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';

const baseService = (baseURL, contentType) => {
    
    function makeRequestOptions(httpMethod, data) {

        const contentTypeHeader = contentType || 'application/json';

        const requestOptions = {
            method: httpMethod,
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': true,
                'Content-Type': contentTypeHeader,
                'Authorization': 'Bearer',
            },
            // credentials: "include",
        }

        if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
            // Build form data object.
            var urlencoded = new URLSearchParams();
            urlencoded.append(globalConstants.email, data[globalConstants.email]);
            urlencoded.append(globalConstants.password, data[globalConstants.password]);

            requestOptions.body = urlencoded;

            // data appended:
            // for (var pair of urlencoded.entries()) {
            //     console.log(pair[0] + ', ' + pair[1]);
            // }
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
        const url = `${baseURL}${id ? `/${id}` : null}`;

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

authentication.register = async function (email, password, repeatPassword) {
    return new Promise((resolve, reject) => {
        if (password !== repeatPassword || password === '' || repeatPassword === '') {
            console.log(email, password, 1);
            reject(new Error('Password fields must match and not be empty.'));
        } else {
            console.log(email, password, 2);
            baseService(`${accountsURL}/register`, contentTypeFormUrlencoded).post(email, password)
                .then((res) => resolve(res))
                .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
        }
    });
};

authentication.logout = async function () {
    return new Promise((resolve, reject) => {
        baseService(`${accountsURL}/logout`).post()
            .then((res) => resolve(res))
            .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
    });
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