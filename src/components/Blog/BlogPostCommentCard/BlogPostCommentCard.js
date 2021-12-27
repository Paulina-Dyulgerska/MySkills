import './BlogPostCommentCard.css';

import formatingService from '../../../services/formatingService';

const BlogPostCommentCard = ({
    id,
    blogPostId,
    content,
    createdOn,
    author,
    likes,
    onLikeClickHandler,
}) => {
    createdOn = formatingService.formatDate(createdOn);

    // const [currentLikesChanged, setCurrentLikesChanged] = useState(false);

    return (
        <article className="blog-post-item" >
            <article className="media-top">
                <span className="date"> {createdOn}</span>
            </article>
            <article className="media-content" >
                <p className="author">Author: {author}</p>
                <p className="details">{content}</p>
                <p className="reactions">
                    <span className="likes" onClick={() => {
                                                                onLikeClickHandler();
                                                                // setCurrentLikesChanged(true);
                                                            }}>
                        {likes} likes <i className="fas fa-thumbs-up"></i>
                    </span>
                </p>
            </article>
        </article >
    )
}

export default BlogPostCommentCard;
