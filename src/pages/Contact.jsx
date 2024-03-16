import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../assets/scss/pages/Contact.scss';
import '../assets/scss/index.scss';

function Contact() {
    const form = useRef();

    useEffect(() => {
        emailjs.init("vd4aNiTObECtdQxS9"); 
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zg5gbo9', 'template_h8nx0kf', form.current)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text); 
            });
    };

    return (
        <>
            <div id="contact">
                <div className='contact'>
                    <h1 className='contact-title'>Contact</h1>
                    <div className='contact-form'>
                        <form className='contact-form-form' ref={form} onSubmit={sendEmail}>
                            <div className='contact-form-label'>Name</div>
                            <input type="text" name="user_name" /> 
                            <div className='contact-form-label'>Email</div>
                            <input type="email" name="user_email" /> 
                            <div className='contact-form-label'>Message</div>
                            <textarea className='contact-form-textarea' name="message" /> 
                            <input className='contact-form-button' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
