import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import Title from '../Title/Title.jsx'

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitButton = (event) => {
        event.preventDefault();

        if (!name || !email || !textarea) {
            setErrorMessage("All fields are required.");
            return;
        }

        const templateParams = {
            form_name: name,
            form_email: email,
            message: textarea
        };

        emailjs
            .send(
                'service_y864urp',  // service ID
                'template_eepgyy8',  // template ID
                templateParams,
                'SqGJaUE2LOJKp6jrw'   // user ID from emailJS
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setErrorMessage(""); 
                    setName("");  
                    setEmail("");  
                    setTextarea(""); 
                    setIsSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error);
                    setErrorMessage("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className={styles.container}>
            <Title>Contact Us</Title>
        </div>
    );
}

export default ContactForm;