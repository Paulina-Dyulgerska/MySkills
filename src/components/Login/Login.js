import { useEffect, useState, useContext } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './Login.css';

import globalConstants from '../../globalConstants/globalConstants';

import accountsService from '../../services/accountsService.js';

import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import InputCheckbox from '../Shared/InputField/InputCheckbox';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';
import InputError from '../Shared/InputError/InputError';
import CustomLink from '../Shared/CustomLink/CustomLink';

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const { rememberMe, setRememberMe } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const [passwordShow, setPasswordShow] = useState(false);
    // const [rememberMe, setRememberMe] = useState(true);
    const history = useHistory();

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email?.value;
            const password = e.target.password?.value;

            await window.grecaptcha.ready(() => {
                window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
                    { action: 'loginSubmit' })
                    .then(token => accountsService.login(email, password, token))
                    .then(userCredential => {
                        setUser(userCredential);
                        if (rememberMe) {
                            localStorage.setItem('userCredentialAccessTokenJWT', userCredential.accessToken);
                            localStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
                            localStorage.setItem('rememberMe', rememberMe);
                        } else {
                            sessionStorage.setItem('userCredentialAccessTokenJWT', userCredential.accessToken);
                            sessionStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
                            sessionStorage.setItem('rememberMe', rememberMe);
                        }

                        history.push('/');
                    })
                    .catch(err => console.log(err));
            });
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
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
    //             localStorage.setItem('userCredentialAccessTokenJWT', userCredential.accessToken);
    //             localStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
    //             history.push('/');
    //         })
    //         .catch(err => console.log(err));
    // }

    const onclickPasswordShowButton = (e) => {
        e.preventDefault();
        setPasswordShow(!passwordShow)
    }

    const onChangeCheckbox = async (e) => {
        await setRememberMe(e);
        // if (e) {
        //     localStorage.setItem('rememberMe', e);
        // } else {
        //     localStorage.clear();
        // }
    }

    console.log(rememberMe + ' is the value of rememberMe in Login')
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

            <section className="login-area-form fadeInRight">
                <form className="login-area-form" onSubmit={onLoginFormSubmitHandler}>
                    <article className="field">
                        <InputFieldWithLabel
                            wrapperClassName="input"
                            type="text"
                            name="email"
                            id="email"
                            className="form-control error"
                        >
                            Email
                        </InputFieldWithLabel>
                        <InputError>{errorMessage}</InputError>

                        <span className="inputError">Please enter a valid email.</span>
                    </article>
                    <article className="field">
                        <InputFieldWithLabel
                            wrapperClassName="input"
                            type={passwordShow ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className="form-control error"
                        >
                            Password
                        </InputFieldWithLabel>
                        <button type="button" className="passwordToggler" onClick={onclickPasswordShowButton}>
                            {passwordShow ? 'HIDE' : 'SHOW'}
                        </button>
                        <span className="inputError">Your password must contain between 4 and 60 characters.</span>
                    </article>
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
                        value="Login" />
                    <Link className="forgotPassword" to={"/" || "/login/forgot-password"}>
                        Forgot password?
                    </Link>
                    <Link className="registerLink" to="/register">
                        New here? Register now!
                    </Link>

                </form>
                {/* <div className="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                    <p>
                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                        &nbsp;
                        <button className="recaptcha-terms-of-use--link-button" >
                            Learn more.
                        </button>
                    </p>
                    <div className="recaptcha-terms-of-use--disclosure" data-uia="recaptcha-disclosure"><span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span></div>
                </div> */}
            </section>

            {/* <div class="login-content login-form hybrid-login-form hybrid-login-form-signup" data-uia="login-page-container">
                <div class="hybrid-login-form-main">
                    <h1 data-uia="login-page-title">Sign In</h1>
                    <form method="post" class="login-form" action="">
                        <div data-uia="login-field+container" class="nfInput nfEmailPhoneInput nfEmailPhoneInError login-input login-input-email">
                            <div class="nfInputPlacement">
                                <div class="nfEmailPhoneControls">
                                    <label class="input_id">
                                        <input type="text" data-uia="login-field" name="userLoginId" class="nfTextField error" id="id_userLoginId" value="" tabindex="0" autocomplete="email" dir="" />
                                        <label for="id_userLoginId" class="placeLabel">Email or phone number</label>
                                    </label>
                                </div>
                                <div id="" class="inputError" data-uia="login-field+error">Please enter a valid email or phone number.</div>
                            </div>
                            <div data-uia="password-field+container" class="nfInput nfPasswordInput nfPasswordInError login-input login-input-password">
                                <div class="nfInputPlacement">
                                    <div class="nfPasswordControls">
                                        <label class="input_id">
                                            <input type="password" data-uia="password-field" name="password" class="nfTextField error" id="id_password" value="" tabindex="0" autocomplete="password" dir="" />
                                            <label for="id_password" class="placeLabel">
                                                Password
                                            </label>
                                        </label>
                                        <button data-uia="password-visibility-toggle" id="id_password_toggle" type="button" class="nfPasswordToggle" title="Show Password">
                                            SHOW
                                        </button>
                                    </div>
                                </div>
                                <div id="" class="inputError" data-uia="password-field+error">Your password must contain between 4 and 60 characters.</div>
                            </div>
                            <button class="btn login-button btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="login-submit-button">Sign In</button>
                            <div class="hybrid-login-form-help">
                                <div class="ui-binary-input login-remember-me">
                                    <input type="checkbox" class="" name="rememberMe" id="bxid_rememberMe_true" value="true" tabindex="0" data-uia="rememberMe" checked="" />
                                    <label for="bxid_rememberMe_true" data-uia="label+rememberMe">
                                        <span class="login-remember-me-label-text">
                                            Remember me
                                        </span>
                                    </label>
                                    <div class="helper">
                                    </div>
                                </div>
                                <a class="link login-help-link" target="_self" data-uia="login-help-link">Need help?</a>
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
                    <div class="hybrid-login-form-other">
                        <form method="post" class="login-form" action="">
                            <div class="facebookForm regOption">
                                <div class="fb-minimal">
                                    <hr />
                                    <button class="btn minimal-login btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="">
                                        <div class="fb-login" data-uia="fb-login"><img class="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                                            <span class="fbBtnText">Login with Facebook</span>
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
                        <div class="login-signup-now" data-uia="login-signup-now">New to Netflix? <a class=" " target="_self" href="/">Sign up now</a>.</div>
                        <div class="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                            <p><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button class="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Learn more.</button></p>
                            <div class="recaptcha-terms-of-use--disclosure" data-uia="recaptcha-disclosure"><span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span></div>
                        </div>
                    </div>
                </div>
            </div>*/}

        </section>
    )
}

export default Login;