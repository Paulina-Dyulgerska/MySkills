const DemoFormUncontrolled = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault(); //ako ne go hvana i spra tuk, tozi event - e, shte mi prezaredi stranicata!
        //daje i nqma da vidq console.log(e) kakwo mi izkarwa, zashtoto shte se prezaredi vednaga page-yt!
        console.log(e);
        console.log(e.target.username.value); //tagret mi e samata forma- ot username poleto, iskam mu value-to!
        console.log(e.target.age.value);
    }

    const onUsernameChangeHandler = (e) => {
        console.log(e.target.value); //vzimam tekushtata stojnost na tozi field.
    }

    return (
        <section style={{ textAlign: 'center' }}>
            <h1>Demo Form Uncontrolled:</h1>
            <form onSubmit={onSubmitHandler} style={{ margin: '0 auto', maxWidth: '12rem' }}>
                <label htmlFor="username" >Username:</label>
                <input type="text" name="username" id="username" value="Pesho" autoFocus onChange={onUsernameChangeHandler} />
                <label htmlFor="age" >Age:</label>
                <input type="number" name="age" id="age" />
                {/* //tezi ne prashtat nikakyv request, zashtoto sa ot type="button"!!!
                <input type="button" value="Send" />
                <button type="button">I am a Button</button> */}
                {/* tezi prashtat request, zashtoto sa ot type="submit" */}
                <input type="submit" value="Send" />
                <button type="submit">I am a Button</button>
            </form>

        </section>
    );
}

export default DemoFormUncontrolled;