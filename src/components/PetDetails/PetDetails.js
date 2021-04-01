import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import * as petsService from '../../services/petsService';
import CustomLink from '../CustomLink/CustomLink';

const PetDetails = ({
    match
}) => {
    const petId = match.params.id;
    //setvam da e {} pet, setvam go oshte predi da sym fetchnala requesta!!!!!
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(petId)
            .then(res => setPet(res))
    }, [match, petId]); //match da mi se podawa vinagi aktualen tuk, zatowa go slagam, zashtoto zawisi ot nego
    //kawko shte vzema kato danni! petId syshto e dependency i e hubawo i nego da go podam v tozi array ot
    //dependencyta!!!

    const onPetLikeClickHandler = () => {
        //zapisvam si novata stojnost za like-ovete:
        const newLikes = parseInt(pet.likes) + 1;

        //prashtam patch request, za da se zapishe novata stojnost za likes
        petsService.patch(pet.id, { likes: newLikes })
            //patch requesta vryshta fetch, t.e. promise, ako e resolvnat tozi promise, prodyljavam nadolu i edva 
            //pri resolvnat promise, updatevam state-yt na componentata, t.e. sled kato servera na BE-da e updatenal
            //stojnostta za likes, edwa togawa shte promenq stojnostta na likes, koqto se pokazwa na usera!!!!
            //Sled uspeshen update na servera, toj mi vyshta response v kojto kato json e samiqt obekt ot DB-to na 
            //servera, kojto obekt toku shto sym promenila!!! Ot tozi obekt moga da vzema aktualnata i updatenata
            //stojnost na likes!!!! Taka e naj-pravilno da q wzema, a ne da uvelichawam oldState, zashtoto ako drug 
            //user e like-nal zaedno s men edno i syshto jivotno, az nqma da polucha aktualnata stojnost, koqto 
            //shte e +2, a shte polucha samo moqta stojnsto +1, koqto NQMA da e vqrna!!! Zatowa pri vseki 
            //update, trqbwa da wzimam ot servera i DB-to aktualnite danni, a ne da si rabotq s moq si state i
            //i da si razchitam samo na nego, zashtoto nqma samo az da rabotq s towa prilojenie!!!!
            .then((res) => res.json())
            .then((res) => {
                //towa e mnogo greshno da go prawq taka:!!!!!!
                // setPet(oldState => ({ ...oldState, likes: parseInt(oldState.likes) + 1 }));
                //pravilno e da vzimam stariq state i mu slagam nova stojnost za likes ot servera!!!!
                setPet(oldState => ({ ...oldState, likes: res.likes }));
            })
            .catch(err => console.error(err));
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                {/* by default tozi buttonn nqma da refreshva, zashtoto ne se namira vyv forma, nishto, 
                     che e type="button"!! Zatowa nqma kakwo da go preventvam!*/}
                <button className="button" onClick={onPetLikeClickHandler}>
                    <i className="fas fa-heart"></i>Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                {/* <Link to={`/pets/edit/${pet.id}`}>
                    <button className="button">
                        <i className="fas fa-heart"></i> Edit
                    </button>
                </Link>
                <Link to={`/pets/delete/${pet.id}`}>
                    <button className="button">
                        <i className="fas fa-heart"></i> Delete
                    </button>
                </Link> */}

                <CustomLink
                    tag='button' // tag name
                    to={`/pets/edit/${pet.id}`} // path
                    className="button" //className
                >
                    <i className="fas fa-heart"></i> Edit
                </CustomLink>
                <CustomLink
                    tag='button' // tag name
                    to={`/pets/delete/${pet.id}`} // path
                    className="button" //className
                >
                    <i className="fas fa-heart"></i> Delete
                </CustomLink>
            </div>
        </section>);
}

export default PetDetails;