const ExternalNavigationItemFileDownload = (props) => {
    return (
        <li className={props.className || "list-item"} >
            <a href={props.path || '/'}
                rel='noopener noreferrer'>
                {props.children}
            </a >
        </li>
    );
};

export default ExternalNavigationItemFileDownload;