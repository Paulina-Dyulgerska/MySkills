// import {withRouter} from 'react-router-dom';
import * as petService from '../../services/petsService';

const PetCreate = ({
    match,
    history,
    location,
}) => {
    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();
        const pet = {
            name: e.target.name.value,
            description: e.target.description.value,
            imageURL: e.target.imageURL.value,
            category: e.target.category.value,
            likes: 0,
        }
        petService.create(pet)
        .then(res=> console.log(res))
        // .then(()=> history.push('/')) //redirect to / page
        .then(()=> history.goBack()) //redirect to previous page
        .catch(err=> console.error(err));
    }

    return (
        <section className="create">
            <form onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="Cats">Cats</option>
                                <option value="Dogs">Dogs</option>
                                <option value="Parrots">Parrots</option>
                                <option value="Reptiles">Reptiles</option>
                                <option value="Others">Others</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    )
}

export default PetCreate;
// export default withRouter(PetCreate);