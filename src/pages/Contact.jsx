import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/scss/pages/Contact.scss';
import '../assets/scss/index.scss';

function Contact() {
    const form = useRef();
    const [contactMessage, setContactMessage] = useState('');

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
        console.log(process.env.REACT_APP_EMAILJS_USER_ID)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const contactName = form.current.elements.user_name;
        const contactEmail = form.current.elements.user_email;
        const contactProject = form.current.elements.message;

        // check if the field has a value
        if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
            // show a message
            setContactMessage('Please fill all the fields 🥺');
        } else {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current)
                .then(() => {
                    // show message
                    setContactMessage('Your message has been sent 😋');

                    // remove the message 10 seconds later
                    setTimeout(() => {
                        setContactMessage('');
                    }, 1000000);
                }, (error) => {
                    console.log('ERROR ! SOMETHING WENT WRONG...', error);
                });

            // to clear the input field
            contactName.value = '';
            contactEmail.value = '';
            contactProject.value = '';
        }
    };

    return (
        <>
            <div id="contact">
                <div className='contact'>
                    <h1 className='contact-title'>Contact Pikapi</h1>
                    <div className='contact-form'>
                        <form className='contact-form-form' ref={form} onSubmit={sendEmail}>
                            <div className='contact-form-label'>Name</div>
                            <input type="text" name="user_name" />
                            <div className='contact-form-label'>Email</div>
                            <input type="email" name="user_email" />
                            <div className='contact-form-label'>Message</div>
                            <textarea className='contact-form-textarea' name="message" />
                            <input className='contact-form-button' type="submit" value="SEND" />
                        </form>
                        {contactMessage && <p className={contactMessage === 'Your message has been sent 😋' ? 'color-green' : 'color-red'}>{contactMessage}</p>}
                    </div>
                    <div className='contact-ig'>
                        <p className='contact-ig-text'>Feel free to reach out to us directly on Instagram, though please note that responses may be less immediate.</p>
                        <a className='contact-ig-link' href="https://www.instagram.com/ai.pikachu/" target="_blank" rel="noopener noreferrer">Instagram @ai.pikachu</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
