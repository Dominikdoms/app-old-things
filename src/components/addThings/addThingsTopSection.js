import React from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll, animateScroll as scroll} from "react-scroll";

import './addThingsTopSection.scss';
import sweater from "../../assets/Header-Form-Background.png";


export const AddThingsTopSection = () => {

    return (
        <header className={"add-things"}>
            <div className={"add-things__container container"}>

                <section className={"add-things__start"}>
                    <ul className={"add-things__login"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li className={"add-things__registration-btn"}><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                    <ul className={"add-things__navigation"}>
                        <li><Link to="/" smooth={true} duration={1000}>Start</Link></li>
                        {/*to="ID"*/}
                        <li><LinkScroll to="steps" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="aboutUs" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="fundations" smooth={true} duration={1000}>Fundacja i
                            Organizacje</LinkScroll></li>
                        <li><LinkScroll to="contact" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>

                    <section className={"add-things__give-things"}>
                        <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className={"add-things__give-things-steps"}>
                            <div className={"rhombus"}>
                                <div className={"rhombus-content"}>
                                    <h3>1</h3>
                                    <p>Wybierz rzeczy</p>
                                </div>
                            </div>
                            <div className={"rhombus"}>
                                <div className={"rhombus-content"}>
                                    <h3>2</h3>
                                    <p>Spakuj je w worki</p>
                                </div>
                            </div>
                            <div className={"rhombus"}>
                                <div className={"rhombus-content"}>
                                    <h3>3</h3>
                                    <p>Wybierz fundację</p>
                                </div>
                            </div>
                            <div className={"rhombus"}>
                                <div className={"rhombus-content"}>
                                    <h3>4</h3>
                                    <p>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </header>
    )
}