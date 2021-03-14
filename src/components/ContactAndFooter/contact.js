import React, {useState} from "react"
import "./contact.scss"
import {Footer} from "./footer"

//validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    userName: yup.string().required("Podane imie jest nieprawidłowe"),
    email: yup.string().required("Pole nie może być puste!").email("Podany email jest nieprawidłowy"),
    message: yup.string().required("Wiadomość musi mieć conajmniej 120 znaków!").min(120)
});

export const Contact = () => {
    // https://react-hook-form.com/get-started#SchemaValidation
    // Step 2: Prepare your schema for validation and register inputs with React Hook Form.

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });

    const [success, setSuccess] = useState('')

    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact"

    const onSubmit = (data) => {
        console.log(data);
        setSuccess(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`)






    }

    return (
        <section className="contact" id={"contact"}>
            <div className="container">
                <div className="img"/>
                <div className="contact__content">
                    <h1 className="contact__header">Skontaktuj się z nami</h1>
                    <p className={"contact__success"}>{success}</p>

                    <form onSubmit={handleSubmit(onSubmit)} className={"contact__form"}>
                        <div className={"contact__form-desc-input"}>
                            <p>Wpisz swoje imię</p>
                            <p>Wpisz swój email</p>
                        </div>
                        <div className={"contact__form-inputs"}>
                            <input type="text" name="userName" ref={register}
                                   className="contact__name"
                                   placeholder={"Krzysztof"}
                            />
                            <input type="text"
                                   name={"email"}
                                   ref={register}
                                   className="contact__email"
                                   placeholder={"abc@xyz.pl"}/>
                        </div>
                        <div className={"contact__errors"}>
                            {/*{errors.userName?.message && <p className={"contact__errors-name"}>{errors.userName?.message}</p>}*/}
                            {/*{errors.email?.message && <p className={"contact__errors-email"}>{errors.email?.message}</p>}*/}
                            <p className={"contact__errors-name"}>{errors.userName?.message}{errors.userName?.message &&
                            <span/>}</p>
                            <p className={"contact__errors-email"}>{errors.email?.message}{errors.email?.message &&
                            <span/>}</p>
                        </div>
                        <p className={"contact__form-desc-area"}>Wpisz swoją wiadomość</p>
                        <textarea
                            name={"message"}
                            ref={register}
                            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            className="contact__textarea"/>
                        {/*{errors.message?.message && <p>Wiadomość musi mieć conajmniej 120 znaków!</p>}*/}
                        <p className={"contact__textarea-error"}>{errors.message?.message}{errors.message?.message &&
                        <span/>}</p>


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