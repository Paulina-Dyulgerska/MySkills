import { useState } from 'react';

import './Blog.css';

import imagePng from '../../img/Blog/article-1.png';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import BlogCard from './BlogCard/BlogCard';


const Blog = () => {
    const [demoState, setDemoState] = useState({
        count: 111,
        step: 1,
    });

    const onCounterButtonClickHandler = () => {
        console.log('IncreaseB' + demoState.count);
        // setDemoState(currentState => ({ step: currentState.step, count: currentState.count + 1 })); //towa e === na towa:
        setDemoState(currentState => ({ ...currentState, count: currentState.count + 1 })); //iskam da 
        //vzemesh vsichko ot currentState i da mu prezapishe stojnostta na count s currentState.count + 1!!!!
        console.log('IncreaseA' + demoState.count);
    }

    const onStepChangeHandler = (e) => {
        const stepValue = Number(e.target.value);
        // setDemoState(currentState => ({ step: stepValue, count: currentState.count })); //towa e === na towa:
        setDemoState(currentState => ({ ...currentState, step: stepValue })); //iskam da vzemesh vsichko ot 
        //currentState i da mu prezapishe stojnostta na step s stepValue!!!!!!
    }

    return (
        //TODO - vote, rank and propose articles, sort atricles by newest ones and the highest ranking ones!!!!!
        // <div className="demo">
        //         <h1>Voting</h1>
        //         <label htmlFor="step">Score</label>
        //         <select name="step" id="step" onChange={onStepChangeHandler}>
        //             <option value="1">1</option>
        //             <option value="2">2</option>
        //             <option value="3">3</option>
        //             <option value="4">4</option>
        //             <option value="5">5</option>
        //             <option value="6">6</option>
        //         </select>
        //         <div>{demoState.count * demoState.step}</div>
        //         <button onClick={onCounterButtonClickHandler}>Vote</button>
        //     </div> 

        < section className="blog-wrapper" >
            <section className="blog-container">
                <article className="blog-content">
                    {/* <img src={imgPolygon} alt="" className="polygon" /> */}
                    <TextBlockContent
                        title="My blog"
                        primary={["Every great success is based on great many trainings"]}
                        secondary={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                            "Therefore I have done my best to collect here part of the sources that give me the oportunity to create this layout."]}
                    >
                    </TextBlockContent>
                    <span class="bottom_line"></span>
                </article>
                <article class="blog-posts">
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                    <BlogCard
                        author="Microsoft"
                        imageSrc={imagePng}
                        title="Create a web API with ASP.NET Core"
                        date="05 Jul 2021"
                        details="This tutorial teaches the basics of building a web API with ASP.NET Core"
                        comments="4"
                        likes="10"
                        url="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio"
                    // onClickTogglePopup={}
                    />
                </article>
            </section>
        </section >
    )
}

export default Blog;