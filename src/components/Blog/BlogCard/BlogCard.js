import { useState } from 'react';

import './BlogCard.css';

import ExternalNavigationItemAsSpan from '../../Header/NavigationItem/ExternalNavigationItemAsSpan';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';

import blogPostsService from '../../../services/blogPostsService';
import formatingService from '../../../services/formatingService';

const BlogCard = ({
    id,
    author,
    imageSrc,
    title,
    publishDate,
    modifiedDate,
    details,
    comments,
    likes,
    onClickTogglePopup,
    url,
}) => {
    // console.log('Hi from blog post id: ' + id);

    publishDate = formatingService.formatDate(publishDate);
    modifiedDate = formatingService.formatDate(modifiedDate);

    const [currentLikes, setCurrentLikes] = useState(likes);

    const onLikeClickHandler = () => {
        const newLikes = parseInt(currentLikes) + 1;
        // console.log(id)

        blogPostsService.patchLikes({ id, likes: newLikes })
            .then((res) => {
                setCurrentLikes(res);
            })
            .catch(err => console.error(err));
    }

    return (
        <article className="blog-post-item" >
            <article className="media-top">
                <img
                    className="image-fluid"
                    src={imageSrc}
                    alt="Blog post item"
                />
                <span className="date"> {modifiedDate !== null ? publishDate : modifiedDate}</span>
            </article>
            <article className="media-content" onClick={onClickTogglePopup}>
                <p className="author">Author: {author}</p>
                <p className="reactions">
                    <span className="comments" >
                        <ButtonCta to={`/blogposts/comments/${id}`} className="button">
                            {comments} comments <i className="fas fa-comment-alt"></i>
                        </ButtonCta>
                    </span>
                    <span className="likes" onClick={onLikeClickHandler}> {currentLikes} likes <i className="fas fa-thumbs-up"></i></span>
                </p>
                <h2 className="title">{title}</h2>
                <p className="details">{formatingService.shortenText(details)}</p>
                <ExternalNavigationItemAsSpan className="link btn btn-cta" path={url}>
                    Read More <i className="arrow_right fas fa-long-arrow-alt-right"></i>
                </ExternalNavigationItemAsSpan>
            </article>
        </article>
    )
}

export default BlogCard;
