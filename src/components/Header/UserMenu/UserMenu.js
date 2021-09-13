import './UserMenu.css';

import { useContext } from 'react';

import AuthContext from '../../../contexts/AuthContext';
import NavigationItem from '../NavigationItem/NavigationItem';

const UserMenu = (props) => {
    const { user } = useContext(AuthContext);
    var hasAdminUser = false
    if (user.userRoles) {
        hasAdminUser = Object.values(user.userRoles).includes("Administrator")
    }

    return (
        <>
            <ul className="nav-list nav-right">
                {/* With dynamic icons from an image file: */}
                {/* <NavigationItem path="/user" className="welcome-user icon-wrapper">
                <span className="icon-sprite icon-down"></span>
                    {`Welcome, ${user?.userEmail || "Guest"}!`}
                </NavigationItem> */}
                
                <NavigationItem path="/user" className="welcome-user">
                    {`Welcome, ${user?.userEmail || "Guest"}!`}
                </NavigationItem>
                
                 {user.userEmail &&
                    (
                        <NavigationItem path="/logout" className="logout">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </NavigationItem>
                    )
                }
                {hasAdminUser && 
                    (
                        <NavigationItem path="/admin" className="admin">
                            <i className="fas fa-user-cog"></i> Admin
                        </NavigationItem>
                    )
                }
            </ul>
            {!user.userEmail &&
                (
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
        </>
    )
}

export default UserMenu;