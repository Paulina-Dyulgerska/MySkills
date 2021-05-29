import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className="list-item" >
            <Link to={props.path || '/'}
                target={props.target || ''}
                rel={props.rel || ''}>
                {props.children}
            </Link >
        </li>
    );
};

export default NavigationItem;