import React from 'react';
import Contact from '../../components/Contact';
import './style.css'; 

const SalesforceContact = () => {
    return (
        <section className='page__salesforce-profil-contact' id="page__salesforce-profil-contact">
            <div className='page__salesforce-profil-contact-form'>
                <Contact/>
            </div>
        </section>
    );
};

export default SalesforceContact;