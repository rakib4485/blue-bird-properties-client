import React from 'react';
import ContactIntro from './ContactIntro/ContactIntro';
import ContactCards from './ContactCards/ContactCards';
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <div>
            <ContactIntro/>
            <ContactCards/>
            <ContactForm/>
        </div>
    );
};

export default ContactUs;