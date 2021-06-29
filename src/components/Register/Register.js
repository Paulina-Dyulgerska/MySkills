import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import firebase, { auth } from '../../utils/firebase';
// import authentication from '../../utils/firebase';
import InputError from '../Shared/InputError/InputError';
import accountsService from '../../services/accountsService.js';
import validationService from '../../services/validationService.js';
import globalConstants from '../../globalConstants/globalConstants';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

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
            history.push('/login');
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
        }
    }

    return (
        <section className="register">
            <form onSubmit={onRegisterFormSubmitHandler}>
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
                {/* <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p> */}
                <article className="field">
                    <InputFieldWithLabel
                        wrapperClassName="input"
                        type="password"
                        id="password"
                        name="password"
                        className="form-control error"
                        validateFieldFunction={validationService.passwordValidator}
                        errorMessage="Your password must be at least 6 characters long and contains only letters and numbers."
                    >
                        Password
                    </InputFieldWithLabel>
                </article>
                <article className="field">
                    <InputFieldWithLabel
                        wrapperClassName="input"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control error"
                        validateFieldFunction={validationService.passwordValidator}
                        errorMessage="Your password must be at least 6 characters long and contains only letters and numbers."
                    >
                        Confirm password
                    </InputFieldWithLabel>
                </article>
                <InputError>{errorMessage}</InputError>
                <ButtonSubmit
                    className="btn btn-submit g-recaptcha"
                    data-action="registerSubmit"
                    value="Register" />
            </form>
        </section>
    )
}

export default Register;