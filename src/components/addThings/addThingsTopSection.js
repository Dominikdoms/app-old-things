import React from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll, animateScroll as scroll} from "react-scroll";
import clx from "classnames"
import './addThingsTopSection.scss';
import sweater from "../../assets/Header-Form-Background.png";
import Firebase from "../firebaseData";
// import Firebase from "../firebaseData";
const firebase = new Firebase()
export const AddThingsTopSection = ({authUser, setAuthUser}) => {
    const handleLogout = () => {
        setAuthUser('');
        firebase.auth.signOut();
        localStorage.clear();
    };

    return (
        <header className={"add-things"}>
            <div className={"add-things__container container"}>

                <section className={"add-things__start"}>
                    <ul className={clx({addThingsEmail: authUser}, "add-things__login")}>
                        {authUser ? (
                            <>
                                <li>{authUser.email}</li>
                                <li className={"navigation__login-start"}><Link to="/">Start</Link></li>
                                <LinkScroll to="addThings" smooth={true} duration={500}>
                                        <li className={"header__registration-btn"}>Oddaj rzeczy</li>
                                </LinkScroll>
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
                    {/*<ul className={"add-things__navigation"}>*/}
                    {/*    <li><Link to="/">Start</Link></li>*/}
                    {/*</ul>*/}

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