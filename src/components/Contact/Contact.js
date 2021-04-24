import './Contact.css';

import MediaItem from './MediaItem/MediaItem';
import ButtonSubmit from '../Shared/Buttons/ButtonSubmit/ButtonSubmit';
import TextBlockContent from '../Shared/TextBlockContext/TextBlockContent';

const Contact = () => {
    return (
        <section className="contact-area-wrapper">
            <section className="contact-area-container">
                <article className="contact-area-content">
                    <TextBlockContent
                        title="Talk Or Meet Me"
                        primary={["Get in touch"]}
                        secondary={[]}
                    >
                    </TextBlockContent>

                    <MediaItem
                        key='1'
                        title='Call Me Now'
                        link=''
                        linkText='02934567845'
                        details=''
                    />
                    <MediaItem
                        key='2'
                        title='Contact Me'
                        link=''
                        linkText='john@gmail.com'
                        details=''
                    />
                    <MediaItem
                        key='3'
                        title='Get Me Here'
                        link=''
                        linkText='Z105 - London, UK'
                        details=''
                    />
                    <MediaItem
                        key='4'
                        title='Listen To Me'
                        link=''
                        linkText='john.com'
                        details=''
                    />
                </article>
                <article className="contact-area-form fadeInRight">
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
                            <textarea name="message" id="message" name="testarea" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                        </span>
                        <ButtonSubmit
                            path={`#`}
                        >
                            Send Message
                        </ButtonSubmit>
                    </form>
                </article>
            </section>
        </section >
    )
}

export default Contact;