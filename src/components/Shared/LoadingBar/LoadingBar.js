import './LoadingBar.css';

const LoadingBar = () => {
    return (
        <article className="">
            <p className="loading">
                Loading...
            </p>
            <article className="loading-container center">
                <span className="loading-bar"> </span>
            </article>
        </article>
    )
}

export default LoadingBar;