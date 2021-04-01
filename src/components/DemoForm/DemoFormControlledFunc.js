import {useState} from 'react';

const DemoFormControlledFunc = () => {
    const [username, setUsername] = useState('Peshi'); //Peshi mi e defaultnata value za username,
    //trqbwa da zadavam tuk kakwo shte e username, dori samo prazen '' da dam, za da znae kakwo
    //shte e inputcheto, t.e. kakyv shte e typa mu!
    //ako go ostawq samo useState(), to za React towa znachi, che e uncontrolled component, a az
    //posle kato iskam da go setna s nqkoq nova stojnost, React mi se oplakwa, che ot uncontrolled
    //component pravq promeni kato na comtrolled component!
    
    const onSubmitHandler = (e) => {
        e.preventDefault(); //ako ne go hvana i spra tuk, tozi event - e, shte mi prezaredi stranicata!
        //daje i nqma da vidq console.log(e) kakwo mi izkarwa, zashtoto shte se prezaredi vednaga page-yt!
        console.log(e);
        console.log(e.target.username.value); //tagret mi e samata forma- ot username poleto, iskam mu value-to!
        console.log(e.target.age.value);
    }

    const onUsernameChangeHandler = (e) => {
        console.log(e.target.value); //vzimam tekushtata stojnost na tozi field.
        setUsername(e.target.value);
    }

    return (
        <section style={{ textAlign: 'center' }}>
            <h1>Demo Form Controlled Func:</h1>
            <form onSubmit={onSubmitHandler} style={{ margin: '0 auto', maxWidth: '12rem' }}>
                <label htmlFor="username" >Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    autoFocus
                    onChange={onUsernameChangeHandler}
                />

                <label htmlFor="age" >Age:</label>
                <input type="number" name="age" id="age" />

                <input type="submit" value="Send" />
                <button type="submit">I am a Button</button>
            </form>

        </section>
    );
}

export default DemoFormControlledFunc;