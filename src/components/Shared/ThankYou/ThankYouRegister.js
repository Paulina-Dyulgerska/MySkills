import { useContext } from 'react';
import { Redirect } from 'react-router';

import './ThankYou.css';
import imgSuccess from "../../../img/success-transparent.png";

import AuthContext from '../../../contexts/AuthContext';

import ButtonCta from '../Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../TextBlockContent/TextBlockContent';

const ThankYouRegister = () => {
    const { user } = useContext(AuthContext);

    if (user.email) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <section className="thank-you-area-wrapper wrapper">

            <section className="thank-you-area-container">
                <img src={imgSuccess} alt="Successful Registration" className="img-success" />
            </section>

            <section className="thank-you-area-form fadeInRight content">
                <TextBlockContent
                    title="Thank you"
                    primary={["I am happy that you are part of our community!"]}
                    secondary={["You have successfully registered your account.",
                        "Login to add your comments and stars to the blog content."]}
                >
                </TextBlockContent>
                <ButtonCta to="/login">
                    Sign in
                </ButtonCta>
            </section>
        </section>
    )
}

export default ThankYouRegister;