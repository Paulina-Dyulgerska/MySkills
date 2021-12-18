import { useState, useEffect, useContext } from 'react';

import AuthContext from '../../../contexts/AuthContext';

import validationService from '../../../services/validationService';
import blogPostsService from '../../../services/blogPostsService';

import globalConstants from '../../../globalConstants/globalConstants';

import BlogPostCommentCard from '../BlogPostCommentCard/BlogPostCommentCard';
import TextBlockContent from '../../Shared/TextBlockContent/TextBlockContent';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';
import ButtonSubmit from '../../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';
import LoadingBar from '../../Shared/LoadingBar/LoadingBar';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import InputFieldWIthLabel from '../../Shared/InputField/InputFieldWIthLabel';
import InputFieldWIthLabelControlled from '../../Shared/InputField/InputFieldWIthLabelControlled';
import InputTextArea from '../../Shared/InputField/InputTextArea';
import InputError from '../../Shared/InputError/InputError';

const BlogPostAddComment = ({
    match,
    onAddCommentFormSubmitHandler,
}) => {
    // const { user } = useContext(AuthContext);
    const [blogPost, setBlogPost] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [contactMessage, setContactMessage] = useState({
        // email: user.userEmail,
    })
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    })

    const id = match.params.id;
    console.log('Hi from BlogPostComments: ' + id);


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
                        <ButtonCta to={`/blogpost/comments/add/${id}`}
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

                <form className="contact-area-form" onSubmit={onAddCommentFormSubmitHandler}>
                    <article className="input-fields">
                        <InputFieldWIthLabel
                            wrapperClassName="input"
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control error"
                            validateFieldFunction={validationService.subjectValidator}
                            errorMessage="Subject should contain at least 5 letters."
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
            </section>
        </section >
    )
}

export default BlogPostAddComment;












