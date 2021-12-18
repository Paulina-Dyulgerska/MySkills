import { useState } from 'react';

import './BlogPostCommentCard.css';

import blogPostsService from '../../../services/blogPostsService';

import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';

const BlogPostCommentCard = ({
    id,
    blogPostId,
    content,
    createdOn,
    author,
    likes,
}) => {
    createdOn = formatDate(createdOn);

    const [currentLikes, setCurrentLikes] = useState(likes);

    const onLikeClickHandler = () => {
        const newLikes = parseInt(currentLikes) + 1;

        blogPostsService.patchLikes({ id, likes: newLikes })
            .then((res) => {
                setCurrentLikes(res);
            })
            .catch(err => console.error(err));
    }

    const onAddCommentClickHandler = () => {

    }

    return (
        <article className="blog-post-item" >
            <article className="media-top">
                <span className="date"> {createdOn}</span>
            </article>
            <article className="media-content" >
                <p className="author">Author: {author}</p>
                <p className="details">{content}</p>
                <p className="reactions">
                    <span className="likes" onClick={onLikeClickHandler}>
                        {currentLikes} likes <i className="fas fa-thumbs-up"></i>
                    </span>
                </p>
            </article>
        </article>
    )
}

export default BlogPostCommentCard;

function formatDate(userDOB) {
    const dob = new Date(userDOB);

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const day = dob.getDate();
    const monthIndex = dob.getMonth();
    const year = dob.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
}
