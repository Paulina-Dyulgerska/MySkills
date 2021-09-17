import { useState, useEffect } from 'react';

import './Admin.css';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';

const Admin = () => {
    const [demoState, setDemoState] = useState({
        count: 111,
        step: 1,
    });

    const onCounterButtonClickHandler = () => {
        console.log('IncreaseB' + demoState.count);
        // setDemoState(currentState => ({ step: currentState.step, count: currentState.count + 1 })); 
        setDemoState(currentState => ({ ...currentState, count: currentState.count + 1 })); 
        console.log('IncreaseA' + demoState.count);
    }

    const onStepChangeHandler = (e) => {
        const stepValue = Number(e.target.value);
        setDemoState(currentState => ({ ...currentState, step: stepValue })); //iskam da vzemesh vsichko ot 
    }

    useEffect(() => {
    }, []);

    return (
        //TODO - vote, rank and propose articles, sort atricles by newest ones and the highest ranking ones!!!!!
        < section className="admin-wrapper" >
            <section className="admin-container">
                <TextBlockContent
                    title="Admin area"
                    primary={["Every great site needs a proper admin panel"]}
                    secondary={["This page is available only for users in role 'Administrator'",
                        "Therefore I have done the check from the JWT returned from the server by avaluating is the user roles array contains any role equal to 'Administrator'."]}
                >
                </TextBlockContent>
                <span className="bottom_line"></span>

                <article className="admin-categories">

                </article>

                <form method="post" asp-action="UploadImage" encType="multipart/form-data">
                    <input type="file" placeholder="Add file" asp-for="@Model.ImageFile" />
                    <input type="submit" value="Upload file" />
                </form>

                <div className="demo">
                    <h1>Voting</h1>
                    <label htmlFor="step">Score</label>
                    <select name="step" id="step" onChange={onStepChangeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <div>{demoState.count * demoState.step}</div>
                    <button onClick={onCounterButtonClickHandler}>Vote</button>
                </div>
            </section>
        </section >
    )
}

export default Admin;