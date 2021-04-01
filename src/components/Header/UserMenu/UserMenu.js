import NavigationItem from '../NavigationItem/NavigationItem';

const UserMenu = (props) => {

    if (props.isUserLoggedIn) {
        return (
            <ul className="nav-list nav-right">
                <NavigationItem path="/user" className="welcome-user">
                   {`Welcome, ${props.username || "user"}!`}
                </NavigationItem>
                <NavigationItem path="/" className="logout">
                    <i className="fas fa-sign-out-alt"></i> Logout
                </NavigationItem>
            </ul>
        )
    }

    return (
        <ul className="nav-list nav-right">
            <NavigationItem path="/register" className="register">
                <i className="fas fa-user-plus"></i> Register
            </NavigationItem>
            <NavigationItem path="/login" className="login">
                <i className="fas fa-sign-in-alt"></i> Login
            </NavigationItem>
        </ul>
    )
}

export default UserMenu;