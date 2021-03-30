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