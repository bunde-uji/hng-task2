import React, {useState, useRef} from 'react';
import './Contact.css';

function Contact() {
    const [isError, setIsError] = useState(false);
    const messageRef = useRef();
    const errorMsg = 'Please enter a message';

    function handleSubmit(e) {
        e.preventDefault()

        if (messageRef.current.value.trim().length < 1) {
            setIsError(true);
        } else {
            e.target.reset();
            setIsError(false);
        }
    }

    return (  
        <div className='contact-page'>
            <div className="form-area">
                <h3>Contact Me</h3>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <form action="" className="contact-form" onSubmit={handleSubmit}>
                    <div className="name-inputs">
                        <div className="name-container">
                        <label htmlFor="first_name" className='label'>First name</label>
                        <input type="text" id="first_name" placeholder='Enter your first name' className='form-input' required />
                        </div>

                        <div className="name-container">
                            <label htmlFor="last_name" className='label'>Last name</label>
                            <input type="text" id="last_name" placeholder='Enter your last name' className='form-input' required />
                        </div>
                    </div>

                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id="email" placeholder='yourname@email.com' className='form-input non-name-input' />

                    <label htmlFor="message" className='label'>Message</label>
                    <textarea name="" placeholder="Send me a message and I'll reply you as soon as possible" id="message" cols="30" rows="5" className={`form-input non-name-input ${isError ? 'error' : ''}`} ref={messageRef}></textarea>
                    {isError && <p className='error-msg'>{errorMsg}</p>}

                    <div className='checkbox-container'>
                    <input type='checkbox' required />
                    <label htmlFor="">You agree to providing your data to Bunde Uji who may contact you.</label>
                    </div>
                    
                    <button type='submit' id='btn__submit'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;