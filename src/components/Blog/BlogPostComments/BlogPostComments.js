import { useState, useEffect } from 'react';

import './BlogPostComments.css';

import AuthContext from '../../../contexts/AuthContext';

import blogPostsService from '../../../services/blogPostsService';
import validationService from '../../../services/validationService';

import globalConstants from '../../../globalConstants/globalConstants';

import BlogPostCommentCard from '../BlogPostCommentCard/BlogPostCommentCard';
import TextBlockContent from '../../Shared/TextBlockContent/TextBlockContent';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';
import ButtonSubmit from '../../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';
import LoadingBar from '../../Shared/LoadingBar/LoadingBar';
import InputFieldWIthLabel from '../../Shared/InputField/InputFieldWIthLabel';
import InputError from '../../Shared/InputError/InputError';

const BlogPostComments = ({
    params,
    match,
}) => {
    const blogPostId = match.params.id;

    const [validationErrors, setValidationErrors] = useState({
        content: '',
    })

    const [blogPost, setBlogPost] = useState({});
    const [comments, setComments] = useState([]);
    const [addCommentIsActive, setAddCommentIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [comment, setComment] = useState({
        blogPostId: match.params.id,
    })


    useEffect(() => {
        blogPostsService.get(blogPostId)
            .then(res => {
                setBlogPost(res);
                return res;
            })
            .then(res => setComments(res.comments))
            .catch(err => console.log(err));

        setComment(currentComment => ({
            ...currentComment,
            blogPostId: blogPost.id,
        }));
    }, [setComments]);


    const onAddCommentClickHandler = () => {
        setAddCommentIsActive(true);
        setErrorMessage('');
    };

    const onAddCommentFormSubmitHandler = async (e) => {
        e.preventDefault();

        console.log(comments);

        try {
            const inputObject = {
                blogPostId: blogPostId,
                content: e.target.content?.value,
            }

            if (!validationService.stringIsNullOrEmpty(inputObject.content)) {
                throw new Error('Please fill the required (*) fields.')
            }

            if (!validationService.validateForm(validationErrors)) {
                throw new Error('Please fill the required (*) fields according the requirements.')
            } else {
                setErrorMessage('');
            }

            await window.grecaptcha.ready(() => {
                window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
                    { action: 'commentSubmit' })
                    .then(token => blogPostsService.addComment({ ...inputObject, token }))
                    .then(res => {
                        setComments(res.comments);
                        // params.history.push(`/thank-you-contact-message-sent`);
                        // params.history.goBack();
                        return null;
                    })
                    .catch(err => {
                        setErrorMessage(err.description);
                    });
            });
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
        }

        setAddCommentIsActive(false);
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
                        <ButtonCta onClick={onAddCommentClickHandler} to='#'
                            className='btn btn-cta'>
                            Add comment <i className="fas fa-comment-alt"></i>
                        </ButtonCta>
                    </li>
                    <span className="bottom_line"></span>
                </article>

                <article className="blog-posts">
                    {blogPost.comments ?
                        comments.map((e) => {
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

                {addCommentIsActive &&
                    <form className="contact-area-form" onSubmit={onAddCommentFormSubmitHandler}>
                        <article className="input-fields">
                            <InputFieldWIthLabel
                                wrapperClassName="input"
                                type="text"
                                id="content"
                                name="content"
                                className="form-control error"
                                validateFieldFunction={validationService.messageValidator}
                                errorMessage="Content should contain at least 15 symbols."
                                setValidationErrors={setValidationErrors}
                            >
                                Content *
                            </InputFieldWIthLabel>
                            <InputError>{errorMessage}</InputError>
                            <br />
                            <ButtonSubmit
                                className="btn btn-submit g-recaptcha"
                                data-action="contactSubmit"
                                value="Send comment" />
                        </article>
                    </form>

                }
            </section>
        </section >
    )
}

export default BlogPostComments;