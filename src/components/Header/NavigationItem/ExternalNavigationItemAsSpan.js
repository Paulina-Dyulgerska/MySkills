const ExternalNavigationItemAsSpan = (props) => {
    return (
        <span className={props.className} >
            <a href={props.path || '/'}
                target='_blank'
                rel='noopener noreferrer'>
                {props.children}
            </a >
        </span>
    );
};

export default ExternalNavigationItemAsSpan;