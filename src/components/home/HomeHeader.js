import React from "react";
import {
    Link
} from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import "./homeHeader.scss"
import HeroImage from "../../assets/Hero-Image.png"
    // background-image: url("../../assets/Hero-Image.png");

export const HomeHeader = () => {

    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <section className="header__img">
                    <img alt={"things"} src={HeroImage}/>
                </section>

                <section className={"header__start"}>
                    <ul className={"header__login"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li className={"header__registration-btn"}><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                    <ul className={"header__navigation"}>
                        <li><LinkScroll to="" smooth={true} duration={1000}>Start</LinkScroll></li>{/*to="ID"*/}
                        <li><LinkScroll to="" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="" smooth={true} duration={1000}>Fundacja i Organizacje</LinkScroll></li>
                        <li><LinkScroll to="" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>

                    <section className={"header__give-things"}>
                        <h1>Zacznij Pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <ul className={"header__buttons"}>
                            <button className={"header__btn"}><Link to={"/logowanie"}>ODDAJ <br/> RZECZ</Link></button>
                            <button className={"header__btn"}><Link to={"/logowanie"}>ZORGANIZUJ ZBIÓRKĘ</Link></button>
                        </ul>
                    </section>
                </section>
            </div>
        </header>
    )
}