import './ThankYou.css';
import imgSuccess from "../../../img/success-transparent.png";

import ButtonCta from '../Buttons/ButtonCta/ButtonCta';
import TextBlockContent from '../TextBlockContent/TextBlockContent';

const ThankYouRegister = ({
}) => {
    return (
        <section className="thank-you-register-area-wrapper">

            <section className="thank-you-area-container">
                <img src={imgSuccess} alt="Successful Registration" className="img-success" />
            </section>

            <section className="thank-you-area-form fadeInRight">
                <TextBlockContent
                    title="Thank you"
                    primary={["I am happy that you are part of our community"]}
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