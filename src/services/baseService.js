const baseService = (baseURL) => {
    function makeHeaders(httpMethod, data) {
        const headers = {
            method: httpMethod,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBheWxpbmFfc3RAeWFob28uY29tIiwibmFtZWlkIjoiYTBmMGNmMzMtZGZkZi00NGFiLTgzYmYtNDIyNzZhYmIyMDAyIiwicm9sZSI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2MjEwMTIxMzcsImV4cCI6MTYyMTYxNjkzNywiaWF0IjoxNjIxMDEyMTM3LCJpc3MiOiJNeVNraWxsc1NlcnZlciIsImF1ZCI6Ik15U2tpbGxzQ2xpZW50In0.k3-FdXoEYzMpCUUpMPvPm8qsThVbqLs8KZhmDvy5Bcg',
            }
        }

        if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH') {
            headers.body = JSON.stringify(data);
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

    const getAll = () => {
        const headers = makeHeaders('GET');
        const url = `${baseURL}`;

        return fetchData(url, headers);
    }

    const getOne = (id) => {
        const headers = makeHeaders('GET');
        const url = `${baseURL}/${id}`;

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
        getAll,
        getOne,
        post,
        patch,
        put,
        del,
    };
}

export default baseService;