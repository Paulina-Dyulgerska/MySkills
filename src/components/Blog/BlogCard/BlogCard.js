import { useState } from 'react';

import './BlogCard.css';

import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';
import blogPostsService from '../../../services/blogPostsService';

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

    publishDate = formatDate(publishDate);
    modifiedDate = formatDate(modifiedDate);

    const [currentLikes, setCurrentLikes] = useState(likes);

    const onLikeClickHandler = () => {
        const newLikes = parseInt(currentLikes) + 1;
        console.log(id)

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
                    <span className="comments"> {comments} comments <i className="fas fa-comment-alt"></i></span>
                    <span className="likes" onClick={onLikeClickHandler}> {currentLikes} likes <i className="fas fa-thumbs-up"></i></span>
                </p>
                <h2 className="title">{title}</h2>
                <p className="details">{shortenText(details)}</p>
                <ExternalNavigationItem className="link btn btn-cta" path={url}>
                    Read More <i className="arrow_right fas fa-long-arrow-alt-right"></i>
                </ExternalNavigationItem>
            </article>
        </article>
    )
}

export default BlogCard;

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


function shortenText(t) {
    if (t.length > 150) {
        t = t.slice(0, 150) + '...';
    }
    return t;
}