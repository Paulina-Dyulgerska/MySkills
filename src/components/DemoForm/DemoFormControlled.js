import { Component } from 'react';

class DemoFormControlled extends Component {

    options = [
        { value: 'it', label: 'IT' },
        { value: 'engineer', label: 'Engineer' },
        { value: 'unemployed', label: 'Unemployed' },
    ]

    constructor(props) {
        super(props)

        this.state = {
            username: 'Pesho',
            age: 18,
            biography: '...add biography...',
            occupation: 'please select one',
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault(); //ako ne go hvana i spra tuk, tozi event - e, shte mi prezaredi stranicata!
        //daje i nqma da vidq console.log(e) kakwo mi izkarwa, zashtoto shte se prezaredi vednaga page-yt!
        // console.log(e);
        // console.log(e.target.username.value); //tagret mi e samata forma- ot username poleto, iskam mu value-to!
        // console.log(e.target.age.value);
        // console.log({...this.state});
    }

    onClickHandler(e) {
        e.preventDefault();
        // console.log({ ...this.state });
        // const { username, age } = this.state;
        // console.log(username);
        // console.log(age);
    }

    // onUsernameChangeHandler(e) {
    //     console.log(e.target.value); //vzimam tekushtata stojnost na tozi field.
    //     this.setState({ username: e.target.value });
    // }

    // onAgeChangeHandler(e) {
    //     console.log(e.target.value);
    //     this.setState(() => ({age: e.target.value}));
    // }

    onChangeHandler(e) {
        console.log(e.target.value);
        this.setState(() => ({ [e.target.name]: e.target.value }));
    }

    render() {
        return (
            <section style={{ textAlign: 'center' }}>
                <h1>Demo Form Controlled:</h1>
                <form onSubmit={this.onSubmitHandler.bind(this)} style={{ margin: '0 auto', maxWidth: '12rem' }}>
                    <label htmlFor="username" >Username:</label>
                    <input type="text"
                        name="username"
                        id="username"
                        autoFocus
                        defaultValue={this.state.username}
                        // onChange={this.onUsernameChangeHandler.bind(this)} 
                        // onChange={this.onChangeHandler.bind(this)}
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor="age" >Age:</label>
                    <input type="number"
                        name="age"
                        id="age"
                        defaultValue={this.state.age}
                        // onChange={this.onAgeChangeHandler.bind(this)} 
                        // onChange={this.onChangeHandler.bind(this)} 
                        onChange={this.onChangeHandler}
                    />
                    {/* //tezi ne prashtat nikakyv request, zashtoto sa ot type="button"!!!
                <input type="button" value="Send" />
                <button type="button">I am a Button</button> */}
                    {/* tezi prashtat request, zashtoto sa ot type="submit" */}

                    <label htmlFor="biography">Biography:</label>
                    <textarea name="biography"
                        value={this.state.biography}
                        id="biography"
                        cols="30"
                        rows="3"
                        onChange={this.onChangeHandler}
                    ></textarea>

                    <label htmlFor="occupation">Occupation:</label>
                    {/* <select name="occupation" id="occupation" onChange={this.onChangeHandler}>
                        <option value={this.state.occupation}>{this.state.occupation}</option>
                        <option value="it">IT</option>
                        <option value="engineer">Engineer</option>
                        <option value="unemployed">Unemployed</option>
                    </select> */}
                    <select name="occupation"
                        id="occupation"
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}>
                        {this.options.map((x, i) => {
                            return <option key={i} value={x.value}>{x.label}</option>
                        })}
                    </select>

                    <input type="submit" value="Send" />
                    <button type="submit" onClick={this.onClickHandler}>I am a Button</button>
                </form>
            </section>
        );
    }
}

export default DemoFormControlled;