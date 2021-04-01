const url = 'http://localhost:5001/pets';

const getAll = (category) => {
    let queryString = url + ((category && (category !== 'All')) ? `?category=${category}` : '');

    return fetch(queryString)
        .then(res => res.json())
        .catch(err => console.error(err))
}
const getOne = (id) => {
    // let queryString = url + (id ? `?id=${id}` : ''); //taka mi vryshta [{},{}...]
    //tjy kato json-servera mi e REST, toj trqbwa da spazwa protokola i da moje da vryshta po id
    //zatowa ne mi e nujno da pravq specialen queryString, a moga direktno da poiskam po id - taka mi 
    //vryshta samo edin {}!!!!
    return fetch(`${url}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const create = (pet) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(pet),
    })
}

//replace!
const update = (pet) => {
    return fetch(`${url}/${pet.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(pet),
    })
}

// //patch!
// const patch = (pet) => {
//     return fetch(`${url}/${pet.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify({ description: pet.description }),
//     })
// }

//patch generic one!
const patch = (petId, data) => {
    return  fetch(`${url}/${petId}`, {
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