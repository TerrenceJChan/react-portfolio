import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

// Credits to @meodai https://codepen.io/meodai/pen/rNedxBa for form idea

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage('Name is required.');
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <h1>Contact</h1>
            <form className="card" autocomplete="off" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} required />
                    <span className="label-text">Name</span>
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} required />
                    <span className="label-text">Email</span>
                </label>
                <label htmlFor="message">
                    <input type="text" name="message" defaultValue={message} onBlur={handleChange} required />
                    <span className="label-text">Message</span>
                </label>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;