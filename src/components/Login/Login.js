import { useEffect, useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService.js';
import AuthContext from '../../contexts/AuthContext';


const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        accountsService.login({ email, password })
            .then(userCredential => {
                setUser(userCredential);
                localStorage.setItem('userCredentialAccessTokenJWT', userCredential.accessToken);
                localStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
                history.push('/');
            })
            .catch(err => console.log(err));
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