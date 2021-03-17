import React from "react";
import {
    Link
} from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import './addThingsTopSection.scss';
import sweater from  "../../assets/Header-Form-Background.png";


export const AddThingsTopSection = () => {

    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <section className="header__img">
                    <img alt={"sweater"} src={sweater}/>
                </section>

                <section className={"header__start"}>
                    <ul className={"header__login"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li className={"header__registration-btn"}><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                    <ul className={"header__navigation"}>
                        <li><Link to="/" smooth={true} duration={1000}>Start</Link></li>{/*to="ID"*/}
                        <li><LinkScroll to="steps" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="aboutUs" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="fundations" smooth={true} duration={1000}>Fundacja i Organizacje</LinkScroll></li>
                        <li><LinkScroll to="contact" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>

                    <section className={"header__give-things"}>
                        <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div>
                            <div>
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>2</p>
                                <p>Spakuj je w worki</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>3</p>
                                <p>Wybierz fundację</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>4</p>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </header>
    )
}