import { useState, useContext } from "react";
import { useHistory, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './Register.css';
// import firebase, { auth } from '../../utils/firebase';
// import authentication from '../../utils/firebase';

import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService';
import validationService from '../../services/validationService';
import globalConstants from '../../globalConstants/globalConstants';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';

const Register = () => {
    const { user } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    const [showPasswordToggler, setShowPasswordToggler] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    if (user.accessToken) {
        return (
            <Redirect to='/' />
        )
    }

    const onRegisterFormSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email?.value;
            const password = e.target.password?.value;
            const confirmPassword = e.target.confirmPassword?.value;
            if (!validationService.stringIsNullOrEmpty(email) ||
                !validationService.stringIsNullOrEmpty(password) ||
                !validationService.stringIsNullOrEmpty(confirmPassword)) {
                throw new Error('All fields are required.')
            }

            if (!validationService.passwordComparer(password, confirmPassword)) {
                throw new Error('Password fields must match and not be empty.')
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
                    { action: 'registerSubmit' })
                    .then(token => {
                        console.log(token);
                        return token;
                    })
                    .then(token => accountsService.register(email, password, confirmPassword, token))
                    // if this Promise is rejected -> it goes to the catch directly because I throw in the fetch, 
                    // the Promise will not go to the following then: 
                    .then(res => {
                        // console.log(res.id+ ' hi from then');
                        history.push('/thank-you-register');
                    })
                    .catch(err => {
                        setErrorMessage(err.description);
                    });
            });

            // var userId = accountsService.register(email, password, confirmPassword, token);
            // console.log(userId);
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(ex + ' hi from ex');
            console.log(errorCode + ' hi from ex.code');
        }
    }

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

    return (
        <section className="register-area-wrapper wrapper">
            <section className="register-area-container">
                <article className="register-area-content content">
                    <TextBlockContent
                        title="Register"
                        primary={["Register and add your comments to the blog"]}
                        secondary={["Already have an account?"]}
                    >
                    </TextBlockContent>
                    <ButtonCta to="/login">
                        Sign in
                    </ButtonCta>
                </article>
            </section>
            <section className="register-area-form-container fadeInRight">
                <article className="register-area-content content">
                    <form className="register-area-form" onSubmit={onRegisterFormSubmitHandler}>
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
                        <article className="field">
                            <InputFieldWithLabel
                                wrapperClassName="input"
                                type={passwordShow ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control error"
                                onChangeShowPasswordToggler={onChangeShowPasswordToggler}
                                validateFieldFunction={validationService.passwordValidator}
                                errorMessage="Your password must be at least 6 characters long and contains only letters and numbers."
                                setValidationErrors={setValidationErrors}
                            >
                                Confirm password *
                            </InputFieldWithLabel>
                            {
                                showPasswordToggler &&
                                <button type="button" className="passwordToggler" onClick={onclickPasswordShowButton}>
                                    {passwordShow ? 'HIDE' : 'SHOW'}
                                </button>
                            }
                        </article>
                        <InputError>{errorMessage}</InputError>
                        <ButtonSubmit
                            className="btn btn-submit g-recaptcha"
                            data-action="registerSubmit"
                            value="Register" />
                    </form>
                </article>
            </section>
        </section>
    )
}

export default Register;