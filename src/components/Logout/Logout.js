import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService.js';
import AuthContext from '../../contexts/AuthContext';


const Logout = () => {
    const { user, setUser } = useContext(AuthContext);
    const { rememberMe } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => async (e) => {
        try {
            await accountsService.logout();
            setUser({});
            localStorage.clear();
            sessionStorage.clear();
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
        }
    }, [])

    return (
        <Redirect to='/' />
    )
}

export default Logout;