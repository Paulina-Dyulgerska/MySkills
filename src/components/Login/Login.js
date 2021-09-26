import { useState, useContext } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './Login.css';

import globalConstants from '../../globalConstants/globalConstants';

import accountsService from '../../services/accountsService';
import validationService from '../../services/validationService';

import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import InputCheckbox from '../Shared/InputField/InputCheckbox';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';
import InputError from '../Shared/InputError/InputError';
import ReCaptchaInfo from '../Shared/ReCaptchaInfo/ReCaptchaInfo';

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const { rememberMe, setRememberMe } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const [showPasswordToggler, setShowPasswordToggler] = useState(false);
    const history = useHistory();
    const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: '',
    })

    if (user.accessToken) {
        return (
            <Redirect to='/' />
        )
    }

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email?.value;
            const password = e.target.password?.value;

            if (!validationService.stringIsNullOrEmpty(email) ||
                !validationService.stringIsNullOrEmpty(password)) {
                throw new Error('All fields are required.')
            }
            console.log(validationErrors);
            console.log('Hi from error message.');
            if (!validationService.validateForm(validationErrors)) {
                throw new Error('Please fill the required (*) fields according the requirements.')
            } else {
                setErrorMessage('');
            }

            await window.grecaptcha.ready(() => {
                window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
                    { action: 'loginSubmit' })
                    .then(token => accountsService.login(email, password, token))
                    // if this Promise is rejected -> it goes to the catch directly because I throw in the fetch, 
                    // the Promise will not go to the following then:                    
                    .then(userCredential => {
                        setUser(userCredential);
                        if (rememberMe) {
                            localStorage.setItem(globalConstants.userCredentialAccessTokenJWT, userCredential.accessToken);
                            localStorage.setItem(globalConstants.userCredentialJWTExpiresIn, userCredential.expiresIn);
                            localStorage.setItem(globalConstants.rememberMe, rememberMe);
                        } else {
                            sessionStorage.setItem(globalConstants.userCredentialAccessTokenJWT, userCredential.accessToken);
                            sessionStorage.setItem(globalConstants.userCredentialJWTExpiresIn, userCredential.expiresIn);
                            sessionStorage.setItem(globalConstants.rememberMe, rememberMe);
                        }
                        history.push('/');
                    })
                    .catch(err => {
                        console.log('hi from login err in catch');
                        setErrorMessage(err.description);
                    });
            });
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log("Hi from catch(ex) from try-catch in login");
            console.log(errorCode, errorMessage);
        }
    }

    // const onLoginFormSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     accountsService.login({ email, password })
    //         .then(userCredential => {
    //             setUser(userCredential);
    //             localStorage.setItem(globalConstants.userCredentialAccessTokenJWT, userCredential.accessToken);
    //             localStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
    //             history.push('/');
    //         })
    //         .catch(err => console.log(err));
    // }

    const onChangeShowPasswordToggler = (inputValue) => {
        if (inputValue === '') {
            setShowPasswordToggler(false);
        }
        else {
            setShowPasswordToggler(true);
        }
    }

    const onclickPasswordShowButton = (e) => {
        e.preventDefault();
        setPasswordShow(!passwordShow)
    }

    const onChangeCheckbox = async (e) => {
        await setRememberMe(e);
    }

    // console.log(rememberMe + ' is the value of rememberMe in Login')

    return (
        <section className="login-area-wrapper wrapper">
            <section className="login-area-container">
                <article className="login-area-content content">
                    <TextBlockContent
                        title="Sign In"
                        primary={["Login and add your comments to the blog"]}
                        secondary={["Don't have an account?"]}
                    >
                    </TextBlockContent>
                    <ButtonCta to="/register">
                        Register
                    </ButtonCta>
                </article>
            </section>
            <section className="login-area-form-container fadeInRight">
                <article className="login-area-form-content content">
                    <form className="login-area-form" onSubmit={onLoginFormSubmitHandler}>
                        <article className="field">
                            <InputFieldWithLabel
                                wrapperClassName="input"
                                type="text"
                                name="email"
                                id="email"
                                className="form-control error"
                                validateFieldFunction={validationService.emailValidator}
                                errorMessage="Please enter a valid email."
                                setValidationErrors={setValidationErrors}
                            >
                                Email *
                            </InputFieldWithLabel>
                        </article>
                        <article className="field">
                            <InputFieldWithLabel
                                wrapperClassName="input"
                                type={passwordShow ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="form-control error"
                                onChangeShowPasswordToggler={onChangeShowPasswordToggler}
                                validateFieldFunction={validationService.passwordValidator}
                                errorMessage="Your password must be at least 6 characters long and contains only letters and numbers."
                                setValidationErrors={setValidationErrors}
                            >
                                Password *
                            </InputFieldWithLabel>
                            {
                                showPasswordToggler &&
                                <button type="button" className="passwordToggler" onClick={onclickPasswordShowButton}>
                                    {passwordShow ? 'HIDE' : 'SHOW'}
                                </button>
                            }
                        </article>
                        <InputError>{errorMessage}</InputError>
                        <InputCheckbox
                            wrapperClassName="input rememberMe"
                            htmlFor="rememberMe"
                            labelText="Remember me"
                            type="checkBox"
                            id="rememberMe"
                            name="rememberMe"
                            inputClassName="form-control"
                            checked={rememberMe}
                            onChangeCheckbox={onChangeCheckbox}
                        />
                        <ButtonSubmit
                            className="btn btn-submit g-recaptcha"
                            data-action="loginSubmit"
                            value="Sign in" />
                        <Link className="forgotPassword" to={"/" || "/login/forgot-password"}>
                            Forgot password?
                        </Link>
                        <Link className="registerLink" to="/register">
                            New here? Register now!
                        </Link>
                    </form>
                    <ReCaptchaInfo />
                </article>
            </section>
        </section>
    )
}

export default Login;