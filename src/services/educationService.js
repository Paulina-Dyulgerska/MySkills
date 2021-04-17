const url='https://localhost:44319/api/educations';

const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const create = (education) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(education),
    })
}

const update = (education) => {
    return fetch(`${url}/${education.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(education),
    })
}

const patch = (educationId, data) => {
    return  fetch(`${url}/${educationId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export {
    getAll,
    getOne,
    create,
    patch,
    update,
};