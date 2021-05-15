import './Contact.css';

import { useEffect, useState } from 'react';

import contactsService from '../../services/contactsService';

import MediaItem from './MediaItem/MediaItem';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        contactsService.getAll()
            .then(res => setContacts(res))
            .catch(err => console.log(err));
    }, []);

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

                <form className="contact-area-form">
                    <article className="input-fields">
                        <span className="input">
                            <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" />
                            <span className="actions"></span>
                        </span>
                        <span className="input">
                            <input type="email" id="email" name="email" className="form-control" placeholder="Your Email*" />
                            <span className="actions"></span>
                        </span>
                        <span className="input">
                            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*" />
                            <span className="actions"></span>
                        </span>
                        <span className="input">
                            <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone*" />
                            <span className="actions"></span>
                        </span>
                    </article>
                    <span className="input">
                        <textarea id="message" name="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                        <span className="actions"></span>
                    </span>
                    <ButtonSubmit path={`#`}>
                        Send Message
                    </ButtonSubmit>
                </form>
            </section>
        </section>
    )
}

export default Contact;