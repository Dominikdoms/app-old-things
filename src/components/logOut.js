import React from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll} from "react-scroll";
import './logOut.scss'

export const LogOut = () => {

    return (
        <nav className={"navigation"}>
            <div className={"navigation__container container"}>
                <section className={"navigation__start"}>
                    <ul className={"navigation__login"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li className={"navigation__registration-btn"}><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                    <ul className={"navigation__nav"}>
                        <li><Link to="/" smooth={true} duration={1000}>Start</Link></li>
                        {/*to="ID"*/}
                        <li><LinkScroll to="steps" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="aboutUs" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="fundations" smooth={true} duration={1000}>Fundacja i
                            Organizacje</LinkScroll></li>
                        <li><LinkScroll to="contact" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>
                </section>


                <section className={"logging-out"}>
                    <header>
                        <h1>Wylogowanie nastąpiło pomyślnie</h1>
                    </header>
                </section>
                <section className={"btn"}>
                    <Link to="/"><button className={"btn-login"}>Strona główna</button></Link>
                </section>
            </div>
        </nav>
    )
}