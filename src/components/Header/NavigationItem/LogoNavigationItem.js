import { Link } from 'react-router-dom';

const LogoNavigationItem = (props) => {
    return (
        <article className="list-item" >
            <Link to={props.path || '/'}>
                <img className="logo-img" src={props.src} alt={props.alt} />
                <h5 className="logo-text">
                    {props.logoText}
                </h5>
            </Link >
        </article>
    );
};

export default LogoNavigationItem;