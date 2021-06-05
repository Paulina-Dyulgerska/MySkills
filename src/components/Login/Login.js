import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService.js';


const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    const storedJwt = localStorage.getItem('userCredentialAccessTokenJWT');
    const [jwt, setJwt] = useState(storedJwt || null);

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            var userCredential = await accountsService.login({ email, password });
            history.push('/');
            console.log(userCredential);
            localStorage.setItem('userCredentialAccessTokenJWT', userCredential.AccessToken);
            setJwt(userCredential.AccessToken);
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
        }
    }

    return (
        <section className="login">
            <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <InputError>{errorMessage}</InputError>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login;