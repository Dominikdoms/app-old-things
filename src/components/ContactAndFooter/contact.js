import React, {useState} from "react"
import "./contact.scss"
import {Footer} from "./footer"
import clx from 'classnames'

//validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    userName: yup.string().required("Podane imie jest nieprawidłowe"),
    email: yup.string().required("Pole nie może być puste!").email("Podany email jest nieprawidłowy"),
    message: yup.string().required("Wiadomość musi mieć conajmniej 120 znaków!").min(120)
});

export const Contact = () => {
    //Value of form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [success, setSuccess] = useState('')


    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });


    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact"

    const onSubmit = () => {
        setSuccess(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`)

        const newMessage = {
            name,
            email,
            message
        };

        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json)
            .then(() => {
            })
            .catch(err => console.log(err))


        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section className="contact" id={"contact"}>
            <div className="container contact__container">
                <div className="contact__content">
                    <h1 className="contact__header">Skontaktuj się z nami</h1>
                    <p className={"contact__success"}>{success}</p>
                    <form onSubmit={handleSubmit(onSubmit)} className={"contact__form"}>

                        <div className={"contact__form-section"}>


                            <div className={"input-name"}>
                                <p className={"name-description"}>Wpisz swoje imię</p>
                                <input type="text" name="userName" ref={register}
                                       value={name}
                                       onChange={e => setName(e.target.value)}
                                       placeholder={"Dominik"}
                                />
                                <span className={clx({error: errors.userName})}/>
                                <p className={"name-description-error"}>{errors.userName?.message}</p>
                            </div>

                            <div className={"input-email"}>
                                <p className={"email-description"}>Wpisz swój email</p>
                                <input type="text"
                                       name={"email"}
                                       ref={register}
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                       className="contact__email"
                                       placeholder={"abc@xyz.pl"}
                                />
                                <span className={clx({error: errors.email})}/>
                                <p className={"email-description-error"}>{errors.email?.message}</p>
                            </div>

                            <div className={"input-message"}>
                                <p className={"message-description"}>Wpisz swoją wiadomość</p>
                                <textarea
                                    name={"message"}
                                    ref={register}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                    className="contact__textarea"/>
                                <span className={clx({error: errors.message})}/>
                                <p className={"message-description-error"}>{errors.message?.message}</p>
                            </div>


                            <div className={"contact__buttons"}>
                                <button className="contact__buttons-btn">Wyślij</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </section>
    )
}