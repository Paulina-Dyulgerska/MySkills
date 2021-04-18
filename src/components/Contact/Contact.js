import './Contact.css';

import MediaItem from './MediaItem/MediaItem';

const Contact = () => {
    return (
        <section className="contact-area-wrapper">
            <section className="contact-area-container">
                <section className="contact-area-contacts">
                    <article className="contact-area-section-title">
                        <h6>Get in Touch</h6>
                        <h2>Talk or Meet with Me</h2>
                    </article>
                    <MediaItem
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
                </section>
                <section className="contact-area-form">
                    <article className="contact-area-section-title">
                        <h6>Contact us</h6>
                        <h2>Let me know</h2>
                    </article>
                    <form className="form_className">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" />
                                <p></p>
                            </div>
                            <div className="col-lg-6">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email*" />
                                <p></p>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*" />
                                <p></p>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*" />
                                <p></p>
                            </div>
                        </div>
                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                        <button type="submit" className="btn send_btn theme_btn">Send Message</button>
                    </form>
                </section>
            </section>
        </section >
    )
}

export default Contact;