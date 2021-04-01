import { Link } from 'react-router-dom';

const LogoNavigationItem = (props) => {
    return (
        <li className="list-item" >
            <Link to={props.path || '/'}>
                <img src={props.src} alt={props.alt} />
            </Link >
        </li>
    );
};

export default LogoNavigationItem;