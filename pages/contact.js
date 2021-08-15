import React, { useReducer, useEffect } from 'react'
import { motion } from 'framer-motion'
import styledJsx from '../styles/contact.styles'
import emailjs from 'emailjs-com'

const initialState = {
    contactName: '',
    email: '',
    message: '',
    sending: false,
    success: false,
    failure: false,
    contactNameSelected: false,
    emailSelected: false
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

export default function Contact() {

    const [state, dispatch] = useReducer(reducer, initialState)

    function resetState() {
        for (let item in initialState) {
            dispatch({field: `${item}`, value: initialState[item]})
        }
    }

    function handleChange(e) {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    function handleFocus(e) {
        dispatch({ field: `${e.target.name}Selected`, value: true })
    }

    function handleBlur(e) {
        if (e.target.value === '') {
            dispatch({ field: `${e.target.name}Selected`, value: false })
        }
    }
    
    async function sendMessage(e) {
        e.preventDefault();
        dispatch({field: 'sending', value: true})
        emailjs.sendForm('service_4vc0z98', 'template_hhzaron', e.target, 'user_myH7KNeG4kPpX8Fw6Nj1u')
        .then((res) => {
            resetState()
            dispatch({field: 'sending', value: false})
            dispatch({field: 'success', value: true})
        }, (error) => {
            dispatch({field: 'sending', value: false})
            dispatch({field: 'false', value: true})
        });
    }

    useEffect(() => {
        resetState()
    }, [])
    
    const { contactName, email, message, sending, success, failure, contactNameSelected, emailSelected } = state
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styledJsx.className} contact`}
        >
            <h2 className={styledJsx.className}>Communication is everything! <br/>  Send me a message any time!</h2>
            <div
                className={`${styledJsx.className} form_container`}
            >
                <form onSubmit={sendMessage}>
                    <div 
                        className={`${styledJsx.className} input_container`} 
                    >
                        <label 
                            className={`${styledJsx.className} label` + ' ' + `${contactNameSelected ? 'selected' : ''}`}
                            htmlFor="contactName"
                        >
                                Name
                        </label>
                        <br/>
                        <input 
                            id="contactName"    
                            name="contactName"
                            className={`${styledJsx.className} input`} 
                            type="text" 
                            autoComplete="name" 
                            value={contactName} 
                            onChange={e => handleChange(e)}
                            onFocus={e => handleFocus(e)} 
                            onBlur={e => handleBlur(e)} 
                            required
                        />
                    </div>
                    <br/><br/>
                    <div 
                        className={`${styledJsx.className} input_container`} 
                    >
                        <label 
                            htmlFor="email"
                            className={`${styledJsx.className} label` + ' ' + `${emailSelected ? 'selected' : ''}`}  
                        >
                            Email
                        </label>
                        <br/>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            className={`${styledJsx.className} input`} 
                            autoComplete="email" 
                            value={email} 
                            onChange={e => handleChange(e)}
                            onFocus={e => handleFocus(e)} 
                            onBlur={e => handleBlur(e)}  
                            required 
                        />
                    </div>
                    <br/><br/><br/>
                    <label 
                        htmlFor="message"
                        className={`${styledJsx.className} message_label`}  
                    >
                        Message
                    </label>
                    <br/>
                    <textarea
                        rows='10' 
                        id="message" 
                        name="message" 
                        type="textarea"
                        className={`${styledJsx.className} message_input`}  
                        value={message} 
                        onChange={e => handleChange(e)} 
                        required 
                    />
                    <br/><br/>
                    <button type="submit">Send Message</button>
                </form>
                <div>
                    {sending ? <span>SENDING</span> : null}
                    {success ? <span>Thank you, message sent!</span> : null}
                    {failure ? <span>Something went wrong!  Please try again later...</span> : null}
                </div>
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
