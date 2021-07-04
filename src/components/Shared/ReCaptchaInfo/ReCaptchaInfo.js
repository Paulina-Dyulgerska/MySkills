import { useState } from 'react';
import './ReCaptchaInfo.css';

const ReCaptchaInfo = () => {

    const [showInformationAboutGoogleReCaptcha, setShowInformationAboutGoogleReCaptcha] = useState(false);

    const onClickShowInformationAboutGoogleReCaptcha = (e) => {
        e.preventDefault();
        setShowInformationAboutGoogleReCaptcha(!showInformationAboutGoogleReCaptcha)
    }

    return (
        <article className="recaptcha-terms-of-use">
            <p>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                &nbsp;
                <button className="recaptcha-terms-of-use-link-button" onClick={onClickShowInformationAboutGoogleReCaptcha}>
                    Learn more.
                </button>
            </p>
            {
                showInformationAboutGoogleReCaptcha &&
                <p className="recaptcha-terms-of-use-disclosure" data-uia="recaptcha-disclosure">
                    <span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA
                        is subject to the Google
                        &nbsp;
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
                        &nbsp;
                        and
                        &nbsp;
                        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a>
                        , and is used for providing, maintaining, and improving the reCAPTCHA service and for general
                        security purposes (it is not used for personalized advertising by Google).
                    </span>
                </p>
            }
        </article>
    )

}

export default ReCaptchaInfo;