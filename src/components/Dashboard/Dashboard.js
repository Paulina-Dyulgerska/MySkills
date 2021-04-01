import { Component } from 'react';

import * as petsService from '../../services/petsService'

import PetInfoLi from '../PetInfoLi/PetInfoLi';
import DashboardNavigation from './DashboardNavigation/DashboardNavigation';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: ''
        };

        console.log("Hi from constructor");
    }

    componentDidMount() {
        console.log("Hi from componentDidMount");

        ////iznasqm towa v service:

        // const category = this.props.match.params.category
        // console.log(category);

        // //iskam da filtervam resultatite na servera, a ne na clienta, za celta polzwa gotova functionalnost,
        // //s koqto razpolagam ot json-server kato api i ot negovata documentation si q wzimam.
        // let queryString = category ? `?category=${category}` : '';

        // fetch(`http://localhost:5001/pets${queryString}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log('Hi from response')
        //         console.log(res);
        //         this.setState(() => ({
        //             pets: res
        //         }));
        //         // this.setState({
        //         //     pets: res
        //         // });
        //     })
        //     .then(res => {
        //         console.log('Hi from state')
        //         console.log(this.state.pets)
        //     })
        //     .catch(err => console.error(err));

        petsService.getAll()
            .then(res => {
                this.setState(() => ({
                    pets: res
                }));
            });
    }

    componentDidUpdate() {
        console.log("Hi from componentDidUpdate");

        //Ako ne napravq tazi proverka, vigani shte minawam prez requesta dolu, toj pyk shte updateva state-yt,
        //towa pyk shte vodi do nov update, nov request, nov state, nov update, nov request i t.n. - shte si 
        //zabiq sama prilojenieto v edin bezkraen cikyl!!!!
        const clickedCategory = this.props.match.params.category;
        if (this.state.currentCategory === clickedCategory) {
            return;
        }

        //iskam vseki pyk pri update na componentata, da mi se pravi request kym servera, za da si vzimam
        //fresh danni za otdelnata categoriq i ako dokato sym gledala All naprimer, e stanal update na Cats, 
        //kogato izbera Cats, da moga da vidq updatenatite Cats, a ne Cats ot predi 10 minuti. Zatowa tozi 
        //request stoi tuk i pri update, samo ako(!!!) ima promqna na categoriqta (proverqwam go towa s gorniq if)
        //samo togawa shte dojda tuk i shte requestna novata categoryq s actualnite zapisi v neq!!!
        //Ako ne napravq tazi proverka, vigani shte minawam prez requesta dolu, toj pyk shte updateva state-yt,
        //towa pyk shte vodi do nov update, nov request, nov state, nov update, nov request i t.n. - shte si 
        //zabiq sama prilojenieto v edin bezkraen cikyl!!!!
        //VAJNO: takiwa zaqwki se pravq tochno v componentDidUpdate(), a ne v componentDidMount() ili render()!!!
        petsService.getAll(clickedCategory)
            .then(res => {
                this.setState(() => ({
                    pets: res,
                    currentCategory: clickedCategory,
                }));
            });
    }

    render() {
        console.log("Hi from render")
        console.log(this.state.pets);

        return (
            <section className="dashboard">
                <h1>Dashboard</h1>
                <DashboardNavigation />
                <ul className="other-pets-list">
                    {this.state.pets.map((p) => {
                        return (
                            <PetInfoLi
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                description={p.description}
                                category={p.category}
                                likes={p.likes}
                                imageURL={p.imageURL} />
                            ////moje i taka s destruktorirane:
                            // <PetInfoLi
                            // key={p.id} {...p}/>
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default Dashboard;




// import React from 'react';
// import DashboardNavigation from './DashboardNavigation/DashboardNavigation';

// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             pets: [],
//         }
//     }

//     componentDidMount() {
//         fetch('http://localhost:5000/pets')
//             .then(res => res.json())
//             .then(res => this.setState({ pets: res }))
//             .then(console.log( this.state.pets))
//             .catch(err => console.error(err));
//     };

//     render() {
//         return (
//             <section className="dashboard">
//                 <h1>Dashboard</h1>
//                 <DashboardNavigation currentCategory={this.props.category} />
//                 <ul className="other-pets-list">
//                     <li className="otherPet">
//                         <h3>Name: Gosho</h3>
//                         <p>Category: Cat</p>
//                         <p className="img"><img src="https://banner2.cleanpng.com/20180310/efe/kisspng-tabby-cat-dog-puppy-pet-yellow-cat-5aa42791ddb4c9.0137275715207074739081.jpg" /></p>
//                         <p className="description">This is not my cat Gosho</p>
//                         <div className="pet-info">
//                             <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                             <a href="#"><button className="button">Details</button></a>
//                             <i className="fas fa-heart"></i> <span> 2</span>
//                         </div>
//                     </li>
//                     <li className="otherPet">
//                         <h3>Name: Gosho</h3>
//                         <p>Category: Cat</p>
//                         <p className="img"><img src="https://banner2.cleanpng.com/20180310/efe/kisspng-tabby-cat-dog-puppy-pet-yellow-cat-5aa42791ddb4c9.0137275715207074739081.jpg" /></p>
//                         <p className="description">This is not my cat Gosho</p>
//                         <div className="pet-info">
//                             <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                             <a href="#"><button className="button">Details</button></a>
//                             <i className="fas fa-heart"></i> <span> 2</span>
//                         </div>

//                     </li>
//                     <li className="otherPet">
//                         <h3>Name: Kiro</h3>
//                         <p>Category: Dog</p>
//                         <p className="img"><img src="https://purepng.com/public/uploads/large/purepng.com-doganimalsdogboy-981524673092o91pm.png" />
//                         </p>
//                         <p className="description">This is my dog Kiro</p>
//                         <div className="pet-info">
//                             <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                             <a href="#"><button className="button">Details</button></a>
//                             <i className="fas fa-heart"></i> <span> 4</span>
//                         </div>
//                     </li>
//                 </ul>
//             </section>
//         )
//     }
// }

// export default Dashboard;

////with functional component:
// import {useEffect, useState} from 'react';
// import DashboardNavigation from './DashboardNavigation/DashboardNavigation';

// const Dashboard = ({
//     match,
//     location,
//     hostory,
// }) => {
//     console.log(match);

//     const [pets, setPets] = useState([]);

//     //tazi function shte se izpylni, samo kogato sa nalice dependencytata j, te sa zadadeni v [], a ako
//     //toj mi e empty, nqma dependencyta, t.e. useEffect shte se izpylni samo 1 pyt i tova shte stane v 
//     //momenta, v kojto se zaredi componentata Dashboard. T.e. useEffect === ComponentDidMount:
//     useEffect(() => {
//         fetch('http://localhost:5000/pets')
//         .then(res => res.json())
//         .then(pets => setPets(pets))
//         .catch(err => console.error(err));
//     }, [])

//     console.log(pets);

//     return (

//         <section className="dashboard">
//             <h1>Dashboard</h1>
//             <DashboardNavigation currentCategory={match.params.category}/>
//             <ul className="other-pets-list">
//                 <li className="otherPet">
//                     <h3>Name: Gosho</h3>
//                     <p>Category: Cat</p>
//                     <p className="img"><img src="https://banner2.cleanpng.com/20180310/efe/kisspng-tabby-cat-dog-puppy-pet-yellow-cat-5aa42791ddb4c9.0137275715207074739081.jpg" /></p>
//                     <p className="description">This is not my cat Gosho</p>
//                     <div className="pet-info">
//                         <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                         <a href="#"><button className="button">Details</button></a>
//                         <i className="fas fa-heart"></i> <span> 2</span>
//                     </div>
//                 </li>
//                 <li className="otherPet">
//                     <h3>Name: Gosho</h3>
//                     <p>Category: Cat</p>
//                     <p className="img"><img src="https://banner2.cleanpng.com/20180310/efe/kisspng-tabby-cat-dog-puppy-pet-yellow-cat-5aa42791ddb4c9.0137275715207074739081.jpg" /></p>
//                     <p className="description">This is not my cat Gosho</p>
//                     <div className="pet-info">
//                         <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                         <a href="#"><button className="button">Details</button></a>
//                         <i className="fas fa-heart"></i> <span> 2</span>
//                     </div>

//                 </li>
//                 <li className="otherPet">
//                     <h3>Name: Kiro</h3>
//                     <p>Category: Dog</p>
//                     <p className="img"><img src="https://purepng.com/public/uploads/large/purepng.com-doganimalsdogboy-981524673092o91pm.png" />
//                     </p>
//                     <p className="description">This is my dog Kiro</p>
//                     <div className="pet-info">
//                         <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                         <a href="#"><button className="button">Details</button></a>
//                         <i className="fas fa-heart"></i> <span> 4</span>
//                     </div>
//                 </li>
//             </ul>
//         </section>
//     )
// }

// export default Dashboard;