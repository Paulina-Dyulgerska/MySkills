import { useEffect, useState } from 'react';

import * as petsService from '../../services/petsService';
import InputError from '../Shared/InputError/InputError';
import stringLengthValidator from '../../services/validationService';

const PetEdit = ({
    match,
    history,
}) => {
    const petId = match.params.id; // tova id idwa ot route-yt to={`/pets/edit/${pet.id}`} 
    // console.log(match.params)
    //setvam da e {} pet, setvam go oshte predi da sym fetchnala requesta!!!!!
    let [pet, setPet] = useState({});
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        petsService.getOne(petId)
            .then(res => setPet(res)) //zapazwam pet v state-yt
    }, [match, petId]); //match da mi se podawa vinagi aktualen tuk, zatowa go slagam, zashtoto zawisi ot nego
    //kawko shte vzema kato danni! petId syshto e dependency i e hubawo i nego da go podam v tozi array ot
    //dependencyta!!!

    const onSaveDescriptionSumbitHandler = (e) => {
        e.preventDefault();

        pet.description = e.target.description.value;

        if (!errorMessage) {
            // petsService.update(pet)
            petsService.patch(pet.id, { description: pet.description })
                .then(res => console.log(res))
                .then(() => {
                    // history.push(`/pets/details/${pet.id}`);
                    history.goBack();
                    return null;
                })
                .catch(err => console.error(err))
        }
    }

    const onDescriptionBlurHandler = (e) => {
        const newDescription = e.target.value;

        if (newDescription.length < 10) {
            setErrorMessage('The length must be at least 10 symbols.');
        } else {
            setErrorMessage('');
        }

        setErrorMessage(stringLengthValidator(newDescription));
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <form onSubmit={onSaveDescriptionSumbitHandler}>
                <textarea
                    type="text"
                    name="description"
                    defaultValue={pet.description}
                    onBlur={onDescriptionBlurHandler}
                >
                </textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button">Save</button>
            </form>
        </section>);
}

export default PetEdit;