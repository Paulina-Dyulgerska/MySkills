import { useState, useEffect } from 'react';

import './Blog.css';
import blogPostsService from '../../services/blogPostsService.js';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import BlogCard from './BlogCard/BlogCard';
import LoadingBar from '../Shared/LoadingBar/LoadingBar';


const Blog = () => {
    const [demoState, setDemoState] = useState({
        count: 111,
        step: 1,
    });
    const [blogPosts, setBlogPosts] = useState([]);

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

    useEffect(() => {
        blogPostsService.get()
            .then(res => setBlogPosts(res))
            .catch(err => console.log(err));
    }, []);

    return (
        //TODO - vote, rank and propose articles, sort atricles by newest ones and the highest ranking ones!!!!!
        < section className="blog-wrapper" >
            <section className="blog-container">
            <form method="post" asp-action="UploadImage" enctype="multipart/form-data">
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

                <article className="blog-content">
                    <TextBlockContent
                        title="My blog"
                        primary={["Every great success is based on great many trainings"]}
                        secondary={["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                            "Therefore I have done my best to collect here part of the sources that give me the oportunity to create this layout."]}
                    >
                    </TextBlockContent>
                    <span className="bottom_line"></span>
                </article>
                <article className="blog-posts">
                     {blogPosts.length === 0 ? <LoadingBar></LoadingBar> :
                            blogPosts.map((e) => {
                                return <BlogCard
                                key={e.id}
                                id={e.id}
                                author={e.author}
                                title={e.title}
                                details={e.details}
                                publishDate={e.publishDate}
                                modifiedDate={e.modifiedDate}
                                imageSrc={e.imageRemoteFileUrl}
                                comments={e.comments.length}
                                likes={e.likes}
                                url={e.externalPostUrl}
                                user={e.userEmail}
                                // onClickTogglePopup={}
                                />
                            })}
                </article>
            </section>
        </section >
    )
}

export default Blog;