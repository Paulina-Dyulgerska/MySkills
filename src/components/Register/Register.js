import { useState } from "react";
import { useHistory } from 'react-router-dom';

import './Register.css';
// import firebase, { auth } from '../../utils/firebase';
// import authentication from '../../utils/firebase';
import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService.js';
import validationService from '../../services/validationService.js';
import globalConstants from '../../globalConstants/globalConstants';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import ButtonCta from '../Shared/Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    const [showPasswordToggler, setShowPasswordToggler] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const onRegisterFormSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
            await window.grecaptcha.ready(() => {
                window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
                    { action: 'registerSubmit' })
                    .then(token => accountsService.register(email, password, confirmPassword, token))
                    .catch(err => console.log(err));
            });

            // var userCredential = await accountsService.register(email, password, confirmPassword, currentToken);
            // console.log(userCredential);
            history.push('/thank-you-register');
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
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
        <section className="register-area-wrapper">
            <section className="register-area-container">
                <TextBlockContent
                    title="Register"
                    primary={["Register and add your comments to the blog"]}
                    secondary={["Already have an account?"]}
                >
                </TextBlockContent>
                <ButtonCta to="/login">
                    Sign in
                </ButtonCta>
            </section>

            <section className="register-area-form-container fadeInRight">
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
                        >
                            Email
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
                        >
                            Password
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
                        >
                            Confirm password
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
            </section>
        </section>
    )
}

export default Register;