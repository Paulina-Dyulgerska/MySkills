import './TextBlockContent.css';

const TextBlockContent = ({
    title,
    primary,
    secondary,
}) => {
    return (
        <>
            <h5 className="text-block-content-title">{title}</h5>
            <article className="text-block-content-description">
                <article className="primary">
                    {
                        primary.map((p, i) => {
                            return (
                                <p key={i}>{p}</p>
                            )
                        })
                    }
                </article>
                <article className="secondary">
                    {
                        secondary.map((p, i) => {
                            return (
                                <p key={i}>{p}</p>
                            )
                        })
                    }
                </article>
            </article>
        </>
    )
}

export default TextBlockContent;