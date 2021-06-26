import './Contact.css';

import { useEffect, useState } from 'react';

import InputError from '../Shared/InputError/InputError';
import globalConstants from '../../globalConstants/globalConstants';
import contactsService from '../../services/contactsService';

import MediaItem from './MediaItem/MediaItem';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import InputFieldWithLabel from '../Shared/InputField/InputFieldWIthLabel';

// TODO - to store the collection in the Context

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        contactsService.get()
            .then(res => setContacts(res))
            .catch(err => console.log(err));
    }, []);

    const onContactFormSubmitHandler = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const phone = e.target.phone.value;
                    
        console.log(name, email, subject, phone);
        
        try {
            await window.grecaptcha.ready(() => {
                window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
                    { action: 'contactSubmit' })
                    .then(token => contactsService.post(name, email, subject, phone, token))
                    .then(userCredential => {
                        // setUser(userCredential);
                        // localStorage.setItem('userCredentialAccessTokenJWT', userCredential.accessToken);
                        // localStorage.setItem('userCredentialJWTExpiresIn', userCredential.expiresIn);
                        // history.push('/');
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

    return (
        <section className="contact-area-wrapper">
            <section className="contact-area-container">
                <TextBlockContent
                    title="Talk Or Meet Me"
                    primary={["Get in touch"]}
                    secondary={[]}
                >
                </TextBlockContent>
                {
                    contacts.map((c) => {
                        return (
                            < MediaItem
                                key={c.id}
                                icon={c.icon}
                                title={c.title}
                                link={c.link}
                                linkText={c.linkText}
                            />
                        )
                    })
                }
            </section>

            <section className="contact-area-form fadeInRight">
                <TextBlockContent
                    title="Let Me Know"
                    primary={["Contact me"]}
                    secondary={[]}
                >
                </TextBlockContent>
                <form className="contact-area-form" onSubmit={onContactFormSubmitHandler}>
                    <article className="input-fields">
                        <InputFieldWithLabel
                            type="text"
                            id="name"
                            name="name"
                            className="form-control error"
                        >
                            Your Name*
                        </InputFieldWithLabel>
                        <InputFieldWithLabel
                            type="email"
                            id="email"
                            name="email"
                            className="form-control error"
                        >
                            Your Email*
                        </InputFieldWithLabel>                        
                        <InputFieldWithLabel
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control error"
                        >
                            Subject*
                        </InputFieldWithLabel>                       
                        <InputFieldWithLabel
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control error"
                        >
                            Phone*
                        </InputFieldWithLabel>
                    </article>
                    <span className="input">
                        <textarea id="message" name="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                        <span className="actions"></span>
                    </span>
                    <ButtonSubmit
                        className="btn btn-submit g-recaptcha"
                        data-action="contactSubmit"
                        value="Send message" />
                </form>
            </section>
        </section>
    )
}

export default Contact;