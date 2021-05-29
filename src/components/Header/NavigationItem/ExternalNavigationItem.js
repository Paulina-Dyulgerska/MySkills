const ExternalNavigationItem = (props) => {
    return (
        <li className={props.className || "list-item"} >
            <a href={props.path || '/'}
                target='_blank'
                rel='noopener noreferrer'>
                {props.children}
            </a >
        </li>
    );
};

export default ExternalNavigationItem;