import './UserMenu.css';

import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../contexts/AuthContext';
import NavigationItem from '../NavigationItem/NavigationItem';

const UserMenu = (props) => {
    const { user } = useContext(AuthContext);

    console.log(user, ' from userMenu');

    return (
        <>
            <ul className="nav-list nav-right">
                <NavigationItem path="/user" className="welcome-user icon-wrapper">
                    {`Welcome, ${user?.userEmail || "Guest"}!`}
                    <span className="icon-sprite icon-down"></span>
                </NavigationItem>
                {user.userEmail &&
                    (
                        <NavigationItem path="/logout" className="logout">
                            <i className="fas fa-sign-out-alt"></i> Logout
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