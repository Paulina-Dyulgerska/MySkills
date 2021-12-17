import { useState, useEffect } from 'react';

import './BlogPostComments.css';

import blogPostsService from '../../../services/blogPostsService';

import BlogPostCommentCard from '../BlogPostCommentCard/BlogPostCommentCard';
import TextBlockContent from '../../Shared/TextBlockContent/TextBlockContent';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';
import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';
import LoadingBar from '../../Shared/LoadingBar/LoadingBar';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const BlogPostComments = ({
    match,
}) => {
    const id = match.params.id;
    console.log('Hi from BlogPostComments: ' + id);

    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        blogPostsService.get(id)
            .then(res => {
                setBlogPost(res);
            })
            .catch(err => console.log(err));
    }, []);

    const onAddCommentClickHandler = () => {

    };

    return (
        < section className="blog-wrapper wrapper" >
            <section className="blog-container">
                <article className="blog-content content">
                    <TextBlockContent
                        title={blogPost.title}
                        primary={[blogPost.author]}
                        secondary={[blogPost.details, blogPost.cotegories]}
                    >
                    </TextBlockContent>
                    <ExternalNavigationItem className="link btn btn-cta" path={blogPost.externalPostUrl}>
                        Read More <i className="arrow_right fas fa-long-arrow-alt-right"></i>
                    </ExternalNavigationItem>
                    <li>
                        <ButtonCta to={`/blog/comments/${id}`}
                            onClick={onAddCommentClickHandler}
                            className='btn btn-cta'>
                            Add comment <i className="fas fa-comment-alt"></i>
                        </ButtonCta>
                    </li>
                    <span className="bottom_line"></span>
                </article>

                <article className="blog-posts">
                    {blogPost.comments ?
                        blogPost.comments.map((e) => {
                            return <BlogPostCommentCard
                                key={e.id}
                                id={e.id}
                                blogPostId={e.blogPostId}
                                content={e.content}
                                createdOn={e.createdOn}
                                author={e.userEmail}
                                likes={e.likes}
                            // onClickTogglePopup={}
                            />
                        })
                        : <LoadingBar></LoadingBar>
                    }
                </article>
            </section>
        </section >
    )
}

export default BlogPostComments;