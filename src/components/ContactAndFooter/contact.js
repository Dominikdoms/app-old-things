import React, {useState} from "react"
import "./contact.scss"
import {Footer} from "./footer"

export const Contact = () => {
    //Value of form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //Errors
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    console.log(nameError)
    console.log(emailError)
    console.log(messageError)

    const handleSubmit = (e) => {
        e.preventDefault()

        const nameError = 'Podane imię jest nieprawidłowe!';
        const emailError = 'Podany email jest nieprawidłowy';
        const messageError = 'Wiadomość musi mieć conajmniej 120 znaków';

        // (name.length < 2 && setNameError(nameError))
        // (email.length < 2 && setEmailError(emailError))
        // (message.length < 2 && setMessageError(messageError))

    }

    return (
        <section className="contact" id={"contact"}>
            <div className="container">
                <div className="img"/>
                <div className="contact__content">
                    <h1 className="contact__header">Skontaktuj się z nami</h1>

                    <form onSubmit={handleSubmit} className={"contact__form"}>
                        <div className={"contact__form-desc-input"}>
                            <p>Wpisz swoje imię</p>
                            <p>Wpisz swój email</p>
                        </div>
                        <div className={"contact__form-inputs"}>

                            <input type="text"
                                   className="contact__name"
                                   placeholder={"Krzysztof"}
                                   value={name}
                                   onChange={e => setName(e.target.value)}/>
                            <input type="email"
                                   className="contact__email"
                                   placeholder={"abc@xyz.pl"}
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <p className={"contact__form-desc-area"}>Wpisz swoją wiadomość</p>
                        <textarea
                            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            className="contact__textarea"
                            value={message}
                            onChange={e => setMessage(e.target.value)}/>
                        <div className={"contact__buttons"}>
                            <button className="contact__buttons-btn">Wyślij</button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </section>
    )
}