import './BlogCard.css';

import ExternalNavigationItem from '../../Header/NavigationItem/ExternalNavigationItem';
import ButtonCta from '../../Shared/Buttons/ButtonCta/ButtonCta';

const BlogCard = ({
    author,
    imageSrc,
    title,
    date,
    details,
    comments,
    likes,
    onClickTogglePopup,
    url,
}) => {

    date = formatDate(date);
    // const dateString = `${date} - ....`;

    return (
        <article className="blog-post-item" >
            <article className="media-top">
                <img
                    className="image-fluid"
                    src={imageSrc}
                    alt="Blog post item logo"
                />
                <span className="date"> {date}</span>
            </article>
            <article className="media-content" onClick={onClickTogglePopup}>
                <article className="meta">
                    <p className="author">Author: {author}</p>
                    <p className="reactions">
                        <span className="comments"> {comments} comments <i class="fas fa-comment-alt"></i></span>
                        <span className="likeslt"> {likes} likes <i class="fas fa-thumbs-up"></i></span>
                    </p>
                </article>
                <a href="/#"><h2 className="title">{title}</h2></a>
                <p className="details">{shortenText(details)}</p>
                <ButtonCta
                    to={'#'} // path
                >
                    Read More <i class="arrow_right fas fa-long-arrow-alt-right"></i>
                </ButtonCta>
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