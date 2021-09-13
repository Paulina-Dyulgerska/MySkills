import './Contact.css';

import { useEffect, useState, useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';

import validationService from '../../services/validationService';

import InputError from '../Shared/InputError/InputError';
import globalConstants from '../../globalConstants/globalConstants';
import contactsService from '../../services/contactsService';
import contactFormMessagesService from '../../services/contactFormMessagesService';

import MediaItem from './MediaItem/MediaItem';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
import InputFieldWIthLabel from '../Shared/InputField/InputFieldWIthLabel';
import InputFieldWIthLabelControlled from '../Shared/InputField/InputFieldWIthLabelControlled';
import InputTextArea from '../Shared/InputField/InputTextArea';

// TODO - to store the collection in the Context

const Contact = (params) => {
    const { user } = useContext(AuthContext);
    const [contacts, setContacts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [contactMessage, setContactMessage] = useState({
        email: user.userEmail,
    })
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    })

    useEffect(() => {
        contactsService.get()
            .then(res => setContacts(res))
            .catch(err => console.log(err));

        setContactMessage(currentContactMessage => ({
            ...currentContactMessage,
            email: user.userEmail,
        }));
    }, [user]);

    const onContactFormSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const inputObject = {
                name: e.target.name?.value,
                email: e.target.email?.value,
                subject: e.target.subject?.value,
                phone: e.target.phone?.value,
                message: e.target.message?.value,
            }

            if (!validationService.stringIsNullOrEmpty(inputObject.name) ||
                !validationService.stringIsNullOrEmpty(inputObject.email) ||
                !validationService.stringIsNullOrEmpty(inputObject.subject) ||
                !validationService.stringIsNullOrEmpty(inputObject.message)) {
                throw new Error('Please fill the required (*) fields.')
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
                    { action: 'contactSubmit' })
                    .then(token => contactFormMessagesService.post({ ...inputObject, token }))
                    .then(() => {
                        setContactMessage(inputObject);
                        // history.push('/');
                        params.history.push(`/thank-you-contact-message-sent`);
                        // params.history.goBack();
                        return null;
                    })
                    .catch(err => {
                        setErrorMessage(err.description);
                    });
            });
        } catch (ex) {
            var errorCode = ex.code;
            var errorMessage = ex.message;
            setErrorMessage(errorMessage);
            console.log(errorCode, errorMessage);
        }
    }

    // const onValueChange = ({name, currentValue}) => {
    //     // setContactMessage(currentContactMessage => ({
    //     //     ...currentContactMessage,
    //     //     [name]: currentValue,
    //     // }));
    // }

    return (
        <section className="contact-area-wrapper">
            <section className="contact-area-container">
                <article className="contact-area-content content">
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
                </article>
            </section>

            <section className="contact-area-form-container fadeInRight content">
                <TextBlockContent
                    title="Let Me Know"
                    primary={["Contact me"]}
                    secondary={[]}
                >
                </TextBlockContent>
                <form className="contact-area-form" onSubmit={onContactFormSubmitHandler}>
                    <article className="input-fields">
                        <InputFieldWIthLabel
                            wrapperClassName="input"
                            type="text"
                            id="name"
                            name="name"
                            className="form-control error"
                            validateFieldFunction={validationService.nameValidatior}
                            errorMessage="Name should contain at least 3 letters."
                            setValidationErrors={setValidationErrors}
                        >
                            Your Name *
                        </InputFieldWIthLabel>

                        <InputFieldWIthLabelControlled
                            wrapperClassName="input"
                            type="text"
                            name="email"
                            id="email"
                            className="form-control error"
                            validateFieldFunction={validationService.emailValidator}
                            errorMessage="Please enter a valid email."
                            defaultValue={contactMessage.email}
                            // onValueChange={onValueChange}
                            setValidationErrors={setValidationErrors}

                        >
                            Your Email *
                        </InputFieldWIthLabelControlled>


                        <InputFieldWIthLabel
                            wrapperClassName="input"
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control error"
                            validateFieldFunction={validationService.subjectValidator}
                            errorMessage="Subject should contain at least 5 letters."
                            setValidationErrors={setValidationErrors}

                        >
                            Subject *
                        </InputFieldWIthLabel>

                        <InputFieldWIthLabel
                            wrapperClassName="input"
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control error"
                            validateFieldFunction={validationService.phoneValidator}
                            errorMessage=""
                            setValidationErrors={setValidationErrors}

                        >
                            Phone
                        </InputFieldWIthLabel>
                    </article>
                    <InputTextArea
                        wrapperClassName="input"
                        id="message"
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Your Message * ..."
                        validateFieldFunction={validationService.messageValidator}
                        errorMessage="Message should contain at least 15 symbols."
                        setValidationErrors={setValidationErrors}
                    />
                    <InputError>{errorMessage}</InputError>
                    <br />
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



// import './Contact.css';

// import { useEffect, useState, useContext } from 'react';

// import AuthContext from '../../contexts/AuthContext';

// import validationService from '../../services/validationService';

// import InputError from '../Shared/InputError/InputError';
// import globalConstants from '../../globalConstants/globalConstants';
// import contactsService from '../../services/contactsService';
// import contactFormMessagesService from '../../services/contactFormMessagesService';

// import MediaItem from './MediaItem/MediaItem';
// import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
// import TextBlockContent from '../Shared/TextBlockContent/TextBlockContent';
// import InputFieldWIthLabel from '../Shared/InputField/InputFieldWIthLabel';
// import InputFieldWIthLabelControlled from '../Shared/InputField/InputFieldWIthLabelControlled';
// import InputTextAreaControlled from '../Shared/InputField/InputTextAreaControlled';

// // TODO - to store the collection in the Context

// const Contact = () => {
//     const { user } = useContext(AuthContext);
//     const [contacts, setContacts] = useState([]);
//     const [errorMessage, setErrorMessage] = useState(null);
//     const [contactMessage, setContactMessage] = useState({
//         email: user.userEmail,
//     })

//     // console.log('Hi from Contacts');
//     // console.log(user);

//     useEffect(() => {
//         contactsService.get()
//             .then(res => setContacts(res))
//             .catch(err => console.log(err));

//         setContactMessage(currentContactMessage => ({
//             ...currentContactMessage,
//             email: user.userEmail,
//         }));

//     }, [user]);

//     const onContactFormSubmitHandler = async (e) => {
//         e.preventDefault();

//         try {
//             const inputObject = {
//                 name: e.target.name?.value,
//                 email: e.target.email?.value,
//                 subject: e.target.subject?.value,
//                 phone: e.target.phone?.value,
//                 message: e.target.message?.value,
//             }

//             if (!validationService.stringIsNullOrEmpty(inputObject.name) ||
//                 !validationService.stringIsNullOrEmpty(inputObject.email) ||
//                 !validationService.stringIsNullOrEmpty(inputObject.subject) ||
//                 !validationService.stringIsNullOrEmpty(inputObject.message)) {
//                 throw new Error('Please fill the required (*) fields.')
//             }

//             await window.grecaptcha.ready(() => {
//                 window.grecaptcha.execute(globalConstants.reCaptchaSiteKey,
//                     { action: 'contactSubmit' })
//                     .then(token => contactFormMessagesService.post({ ...inputObject, token }))
//                     .then(() => {
//                         setContactMessage(inputObject);
//                         // history.push('/');
//                     })
//                     .catch(err => console.log(err));
//             });
//         } catch (ex) {
//             var errorCode = ex.code;
//             var errorMessage = ex.message;
//             setErrorMessage(errorMessage);
//             console.log(errorCode, errorMessage);
//         }
//     }

//     const onValueChange = (e) => {
//         console.log(e)
//         setContactMessage(currentContactMessage => ({
//             ...currentContactMessage,
//             [e.target.name]: e.target.value,
//         }));
//     }

//     return (
//         <section className="contact-area-wrapper">
//             <section className="contact-area-container">
//                 <TextBlockContent
//                     title="Talk Or Meet Me"
//                     primary={["Get in touch"]}
//                     secondary={[]}
//                 >
//                 </TextBlockContent>
//                 {
//                     contacts.map((c) => {
//                         return (
//                             < MediaItem
//                                 key={c.id}
//                                 icon={c.icon}
//                                 title={c.title}
//                                 link={c.link}
//                                 linkText={c.linkText}
//                             />
//                         )
//                     })
//                 }
//             </section>

//             <section className="contact-area-form-container fadeInRight">
//                 <TextBlockContent
//                     title="Let Me Know"
//                     primary={["Contact me"]}
//                     secondary={[]}
//                 >
//                 </TextBlockContent>
//                 <form className="contact-area-form" onSubmit={onContactFormSubmitHandler}>
//                     <article className="input-fields">
//                         <InputFieldWIthLabelControlled
//                             wrapperClassName="input"
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="form-control error"
//                             validateFieldFunction={validationService.nameValidatior}
//                             errorMessage="Name should contain at least 3 letters."
//                             onValueChange={onValueChange}
//                         >
//                             Your Name *
//                         </InputFieldWIthLabelControlled>

//                         <InputFieldWIthLabelControlled
//                             wrapperClassName="input"
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="form-control error"
//                             validateFieldFunction={validationService.emailValidator}
//                             errorMessage="Please enter a valid email."
//                             value={contactMessage.email}
//                             onValueChange={onValueChange}
//                         >
//                             Your Email *
//                         </InputFieldWIthLabelControlled>


//                         <InputFieldWIthLabelControlled
//                             wrapperClassName="input"
//                             type="text"
//                             id="subject"
//                             name="subject"
//                             className="form-control error"
//                             validateFieldFunction={validationService.subjectValidator}
//                             errorMessage="Subject should contain at least 5 letters."
//                             onValueChange={onValueChange}
//                         >
//                             Subject *
//                         </InputFieldWIthLabelControlled>
//                         <InputFieldWIthLabelControlled
//                             wrapperClassName="input"
//                             type="text"
//                             id="phone"
//                             name="phone"
//                             className="form-control error"
//                             validateFieldFunction={validationService.phoneValidator}
//                             errorMessage=""
//                             onValueChange={onValueChange}
//                         >
//                             Phone
//                         </InputFieldWIthLabelControlled>
//                     </article>
//                     <InputTextAreaControlled
//                         wrapperClassName="input"
//                         id="message"
//                         name="message"
//                         className="form-control"
//                         rows="6"
//                         placeholder="Your Message * ..."
//                         validateFieldFunction={validationService.messageValidator}
//                         errorMessage="Message should contain at least 15 symbols."
//                         onValueChange={onValueChange} />
//                     <InputError>{errorMessage}</InputError>
//                     <br />
//                     <ButtonSubmit
//                         className="btn btn-submit g-recaptcha"
//                         data-action="contactSubmit"
//                         value="Send message" />
//                 </form>
//             </section>
//         </section>
//     )
// }

// export default Contact;