import { useContext } from 'react';

import './ThankYou.css';
import imgSuccess from "../../../img/success-transparent.png";

import AuthContext from '../../../contexts/AuthContext';

import TextBlockContent from '../TextBlockContent/TextBlockContent';

const ThankYouContactMessageSent = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="thank-you-area-wrapper wrapper">

            <section className="thank-you-area-container">
                <img src={imgSuccess} alt="Successful message sending" className="img-success" />
            </section>

            <section className="thank-you-area-form content fadeInRight">
                <TextBlockContent
                    title={`Thank you for contacting us${user.userEmail ? ` ${user.userEmail}` : ''}!`}
                    primary={["I am happy that you are part of our community!"]}
                    secondary={["You have successfully sent a message to our admins.",
                        "We will reply to your email in 24 hours."]}
                >
                </TextBlockContent>
            </section>
        </section >
    )
}

export default ThankYouContactMessageSent;