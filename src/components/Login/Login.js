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
        <section className="login-area-wrapper">
            <section className="login-area-container">
                <TextBlockContent
                    title="Sign In"
                    primary={["Login and add your comments to the blog"]}
                    secondary={["Don't have an account?"]}
                >
                </TextBlockContent>
                <ButtonCta to="/register">
                    Register
                </ButtonCta>
            </section>

            <section className="login-area-form-container fadeInRight">
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
            </section>

            {/* <div className="login-content login-form hybrid-login-form hybrid-login-form-signup" data-uia="login-page-container">
                <div className="hybrid-login-form-main">
                    <h1 data-uia="login-page-title">Sign In</h1>
                    <form method="post" className="login-form" action="">
                        <div data-uia="login-field+container" className="nfInput nfEmailPhoneInput nfEmailPhoneInError login-input login-input-email">
                            <div className="nfInputPlacement">
                                <div className="nfEmailPhoneControls">
                                    <label className="input_id">
                                        <input type="text" data-uia="login-field" name="userLoginId" className="nfTextField error" id="id_userLoginId" value="" tabindex="0" autocomplete="email" dir="" />
                                        <label for="id_userLoginId" className="placeLabel">Email or phone number</label>
                                    </label>
                                </div>
                                <div id="" className="inputError" data-uia="login-field+error">Please enter a valid email or phone number.</div>
                            </div>
                            <div data-uia="password-field+container" className="nfInput nfPasswordInput nfPasswordInError login-input login-input-password">
                                <div className="nfInputPlacement">
                                    <div className="nfPasswordControls">
                                        <label className="input_id">
                                            <input type="password" data-uia="password-field" name="password" className="nfTextField error" id="id_password" value="" tabindex="0" autocomplete="password" dir="" />
                                            <label for="id_password" className="placeLabel">
                                                Password
                                            </label>
                                        </label>
                                        <button data-uia="password-visibility-toggle" id="id_password_toggle" type="button" className="nfPasswordToggle" title="Show Password">
                                            SHOW
                                        </button>
                                    </div>
                                </div>
                                <div id="" className="inputError" data-uia="password-field+error">Your password must contain between 4 and 60 characters.</div>
                            </div>
                            <button className="btn login-button btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="login-submit-button">Sign In</button>
                            <div className="hybrid-login-form-help">
                                <div className="ui-binary-input login-remember-me">
                                    <input type="checkbox" className="" name="rememberMe" id="bxid_rememberMe_true" value="true" tabindex="0" data-uia="rememberMe" checked="" />
                                    <label for="bxid_rememberMe_true" data-uia="label+rememberMe">
                                        <span className="login-remember-me-label-text">
                                            Remember me
                                        </span>
                                    </label>
                                    <div className="helper">
                                    </div>
                                </div>
                                <a className="link login-help-link" target="_self" data-uia="login-help-link">Need help?</a>
                            </div>
                            <input type="hidden" name="flow" value="websiteSignUp" />
                            <input type="hidden" name="mode" value="login" />
                            <input type="hidden" name="action" value="loginAction" />
                            <input type="hidden" name="withFields" value="rememberMe,nextPage,userLoginId,password,countryCode,countryIsoCode,recaptchaResponseToken,recaptchaError,recaptchaResponseTime" />
                            <input type="hidden" name="authURL" value="1624383277859.sd/6N/yvElxdaHSSRI3UIPeV3rU=" />
                            <input type="hidden" name="nextPage" value="" />
                            <input type="hidden" name="showPassword" value="" />
                            <input type="hidden" name="countryCode" value="+359" />
                            <input type="hidden" name="countryIsoCode" value="BG" />
                        </div>
                    </form>
                    <div className="hybrid-login-form-other">
                        <form method="post" className="login-form" action="">
                            <div className="facebookForm regOption">
                                <div className="fb-minimal">
                                    <hr />
                                    <button className="btn minimal-login btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="">
                                        <div className="fb-login" data-uia="fb-login"><img className="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                                            <span className="fbBtnText">Login with Facebook</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <input type="hidden" name="flow" value="websiteSignUp" />
                            <input type="hidden" name="mode" value="login" />
                            <input type="hidden" name="action" value="facebookLoginAction" />
                            <input type="hidden" name="withFields" value="rememberMe,nextPage,accessToken" />
                            <input type="hidden" name="authURL" value="1624383277859.sd/6N/yvElxdaHSSRI3UIPeV3rU=" />
                            <input type="hidden" name="nextPage" value="" />
                            <input type="hidden" name="showPassword" value="" />
                            <input type="hidden" name="countryCode" value="+359" />
                            <input type="hidden" name="countryIsoCode" value="BG" />
                            <input type="hidden" name="accessToken" value="" />
                        </form>
                        <div className="login-signup-now" data-uia="login-signup-now">New to Netflix? <a className=" " target="_self" href="/">Sign up now</a>.</div>
                        <div className="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                            <p><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button className="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Learn more.</button></p>
                            <div className="recaptcha-terms-of-use--disclosure" data-uia="recaptcha-disclosure"><span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span></div>
                        </div>
                    </div>
                </div>
            </div>*/}

        </section>
    )
}

export default Login;