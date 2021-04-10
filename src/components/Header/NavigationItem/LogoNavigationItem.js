import { Link } from 'react-router-dom';

const LogoNavigationItem = (props) => {
    return (
        <article className="list-item" >
            <Link to={props.path || '/'}>
                <img src={props.src} alt={props.alt} />
                <h1 className="logo-text">
                    {props.logoText}
                </h1>
            </Link >
        </article>
    );
};

export default LogoNavigationItem;