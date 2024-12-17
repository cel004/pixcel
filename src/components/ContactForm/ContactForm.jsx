import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import Title from '../Title/Title.jsx'

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [textarea, setTextarea] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitButton = (event) => {
        event.preventDefault();

        if (!name || !email || !phonenumber || !textarea) {
            setErrorMessage("All fields are required.");
            return;
        }

        const templateParams = {
            form_name: name,
            form_email: email,
            form_phonenumber: phonenumber,
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
            <div className={styles.inquiries}>
                <h4>All inquiries</h4>
                <p>contact.pixcel@gmail.com</p>
            </div>
            <div className={styles.formContainer}>
                {isSubmitted ? (
                    <p className = {styles.successMessage}>Thank you for your message!</p>
                ) : (
                    <form onSubmit={submitButton}>
                        <div className={styles.formContainer}>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Name*"
                                required/>
                            <input 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email*"
                                required/>
                            <input 
                                type="number" 
                                value={phonenumber} 
                                onChange={(e) => setPhonenumber(e.target.value)} 
                                placeholder="Phone number*"
                                required/>
                            <textarea 
                                value={textarea} 
                                onChange={(e) => setTextarea(e.target.value)} 
                                placeholder="Message*"
                                required/>
                                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                        </div>
                        <div className={styles.submitContainer}>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                    )}
                </div>       
        </div>
    );
}

export default ContactForm;