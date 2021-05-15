import './LoadingBar.css';

const LoadingBar = () => {
    return (
        <section className="">
            <p className="loading">
                Loading...
            </p>
            <article className="loading-container center">
                <span className="loading-bar"> </span>
            </article>
        </section>
    )
}

export default LoadingBar;