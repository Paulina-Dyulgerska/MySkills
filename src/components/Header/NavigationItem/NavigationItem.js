import { Link, NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className="list-item" >
            <NavLink activeClassName='nav-list-active' exact={true} to={props.path || '/'}>
                {props.children}
            </NavLink >
            {/* <Link to={props.path || '/'}>
                {props.children}
            </Link > */}
        </li>
    );
};

export default NavigationItem;