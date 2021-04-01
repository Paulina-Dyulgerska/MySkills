import { NavLink } from 'react-router-dom';

const DashboardNavigation = ({
    currentCategory
}) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/All" exact={true}>All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/Cats" exact={true}>Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/Dogs" exact={true}>Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/Parrots" exact={true}>Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/Reptiles" exact={true}>Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/Others" exact={true}>Others</NavLink></li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation;