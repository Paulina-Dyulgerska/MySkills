import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import accountsService from '../../services/accountsService';

// import InputError from '../Shared/InputError/InputError';

const Logout = () => {
    const { setUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);

    // TODO to set an error message in the / or in spesial field in the Main?
    useEffect(() => async (e) => {
        try {
            await accountsService.logout();
            setUser({});
            localStorage.clear();
            sessionStorage.clear();
        } catch (ex) {
            var currentErrorCode = ex.code;
            var currentErrorMessage = ex.message;
            setErrorMessage(currentErrorMessage);
            console.log(currentErrorMessage, currentErrorCode);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Redirect to='/' />
    )
}

export default Logout;