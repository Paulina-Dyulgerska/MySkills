import { useState, useEffect } from 'react';

import './Blog.css';

import blogPostsService from '../../services/blogPostsService';

import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import BlogCard from './BlogCard/BlogCard';
import LoadingBar from '../Shared/LoadingBar/LoadingBar';


const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        blogPostsService.get()
            .then(res => setBlogPosts(res))
            .catch(err => console.log(err));
    }, []);

    return (
        //TODO - vote, rank and propose articles, sort atricles by newest ones and the highest ranking ones!!!!!
        < section className="blog-wrapper" >
            <section className="blog-container">
                <article className="blog-content content">
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