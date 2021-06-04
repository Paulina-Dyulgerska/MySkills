import globalConstants from '../globalConstants/globalConstants';

const accountsURL = globalConstants.backendWebApiServerUrl + '/accounts';

const baseService = (baseURL) => {
    function makeHeaders(httpMethod, data) {
        const headers = {
            method: httpMethod,
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': true,
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'multipart/form-data',
                // 'Content-Type': 'undefined',
                // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBheWxpbmFfc3RAeWFob28uY29tIiwibmFtZWlkIjoiYTBmMGNmMzMtZGZkZi00NGFiLTgzYmYtNDIyNzZhYmIyMDAyIiwicm9sZSI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2MjIyNjc4ODYsImV4cCI6MTYyMjg3MjY4NiwiaWF0IjoxNjIyMjY3ODg2LCJpc3MiOiJNeVNraWxsc1NlcnZlciIsImF1ZCI6Ik15U2tpbGxzQ2xpZW50In0.6Fxztg52V2YhUPhMjTyc3PdRWONlfI7cNoBs9k1NoBw',
            },
            // credentials: "include",
        }

        if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
            // Build formData object.
            let formData = new FormData();
            console.log('Hi from fetch login:')
            console.log(data[globalConstants.email] + ';' + data[globalConstants.password]);
            // formData.append('email', 'data[globalConstants.email]');
            // formData.append('password', 'data[globalConstants.password]');
            formData.append('email', 'data[globalConstants.email]');
            formData.append('password', 'data[globalConstants.password]');
            // headers.headers['Content-Type'] = 'application/json';

            headers.body = formData;

            for(var pair of formData.entries()) {
                console.log(pair[0]+', '+pair[1]);
              }
        }

        return headers;
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

    async function fetchData(url, headers) {
        const e = await fetch(url, headers);
        const x = await handleError(e);
        return serializeData(x);
    }

    const get = (id) => {
        const headers = makeHeaders('GET');
        const url = `${baseURL}${id ? `/${id}` : null}`;

        return fetchData(url, headers);
    }

    const post = (data) => {
        const headers = makeHeaders('POST', data);
        const url = `${baseURL}`;

        return fetchData(url, headers);
    }

    const put = (data) => {
        const headers = makeHeaders('PUT', data);
        const url = `${baseURL}/${data.id}`;

        return fetchData(url, headers);
    }

    const patch = (data) => {
        const headers = makeHeaders('PATCH', data);
        const url = `${baseURL}/${data.id}`;

        return fetchData(url, headers);
    }

    const del = (id) => {
        const headers = makeHeaders('DELETE');
        const url = `${baseURL}/${id}`;

        return fetchData(url, headers);
    }

    return {
        get,
        post,
        patch,
        put,
        del,
    };
}

const auth = baseService(accountsURL);

const authentication = function () { };

authentication.login = async function (email, password) {
    return new Promise((resolve, reject) => {
        baseService(`${accountsURL}/login`).post(email, password)
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
            baseService(`${accountsURL}/register`).post(email, password)
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
    auth.onAuthStateChanged((user) => {
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