import React, {useContext} from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll, animateScroll as scroll} from "react-scroll";
import clx from "classnames"
import "./homeHeader.scss"
import HeroImage from "../../assets/Hero-Image.png"
import {FirebaseContext} from "../../App";
import Firebase from "../firebaseData";
// background-image: url("../../assets/Hero-Image.png");

// const {firebase, authUser} = useContext(FirebaseContext)
// const firebase = new Firebase()
export const HomeHeader = (props) => {
    const {firebase, authUser, setAuthUser} = useContext(FirebaseContext)
    // const {authUser, setAuthUser} = props;
    const handleLogout = () => {
        setAuthUser('');
        firebase.auth.signOut();
        localStorage.clear();
    };

    console.log("/oddaj-rzeczy", authUser)

    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <section className="header__img">
                    <img alt={"things"} src={HeroImage}/>
                </section>

                <section className={"header__start"}>

                    <ul className={clx({header__email: authUser}, "header__login")}>
                        {authUser ? (
                            <>
                                <li>{authUser.email}</li>
                                <Link to="/oddaj-rzeczy">
                                    <li className={"header__registration-btn"}>Oddaj rzeczy</li>
                                </Link>
                                <li onClick={handleLogout}><Link to="/wylogowano">wyloguj</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/logowanie">Zaloguj</Link></li>
                                <li className={"header__registration-btn"}><Link to="/rejestracja">Załóż konto</Link>
                                </li>
                            </>
                        )}

                    </ul>
                    <ul className={"header__navigation"}>
                        <li><Link to="/" smooth={true} duration={1000}>Start</Link></li>
                        <li><LinkScroll to="steps" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="aboutUs" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="fundations" smooth={true} duration={1000}>Fundacja i
                            Organizacje</LinkScroll></li>
                        <li><LinkScroll to="contact" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>

                    <section className={"header__give-things"}>
                        <h1>Zacznij Pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <ul className={"header__buttons"}>
                            {authUser ? (
                                <>
                                    <button className={"header__btn"}><Link to={"/oddaj-rzeczy"}>ODDAJ <br/> RZECZ</Link></button>
                                    <button className={"header__btn"}><Link to={"/"}>ZORGANIZUJ ZBIÓRKĘ</Link></button>
                                </>
                            ) : (
                                <>
                                    <button className={"header__btn"}><Link to={"/logowanie"}>ODDAJ <br/> RZECZ</Link></button>
                                    <button className={"header__btn"}><Link to={"/logowanie"}>ZORGANIZUJ ZBIÓRKĘ</Link></button>
                                </>
                            )}

                        </ul>
                    </section>
                </section>
            </div>
        </header>
    )
}