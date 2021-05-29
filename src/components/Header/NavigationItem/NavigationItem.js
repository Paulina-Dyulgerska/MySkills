import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className="list-item" >
            <Link to={props.path || '/'}>
                {props.children}
            </Link >
        </li>
    );
};

export default NavigationItem;