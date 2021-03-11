import React from "react"
import "./contact.scss"
import {Footer} from "./footer"

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
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
                                   placeholder={"Krzysztof"}/>
                            <input type="email"
                                   className="contact__email"
                                   placeholder={"abc@xyz.pl"}/>
                        </div>
                        <p className={"contact__form-desc-area"}>Wpisz swoją wiadomość</p>
                        <textarea
                            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            className="contact__textarea"/>
                        <div className={"contact__buttons"}>
                            <button className="contact__buttons-btn">Wyślij</button>
                        </div>
                    </form>
                </div>
                <Footer/>

                {/*<div className={""}>*/}
                {/*    <p>Copyright by Coders Lab</p>*/}

                {/*    <div>*/}
                {/*        pp pp*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </section>
    )
}