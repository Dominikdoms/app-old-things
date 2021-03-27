import React, {useContext, useState, useEffect} from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll} from "react-scroll";
import clx from "classnames"
// import "./homeHeader.scss"
import {FirebaseContext} from "../../App";
import HamburgerMenu from 'react-hamburger-menu';

export const HomeHeader = () => {
    const {firebase, authUser, setAuthUser} = useContext(FirebaseContext)

    const handleLogout = () => {
        setAuthUser('');
        firebase.auth.signOut();
        localStorage.clear();
    };

    const [showMenu, setShowMenu] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleShowMenu = e => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }

    const checkMobile = () => {
        const query = window.matchMedia("(min-width: 800px)");

        setIsMobile(!query.matches);
        setShowMenu(query.matches);
        return query;
    }

    useEffect(() => {
        const query = checkMobile()
        query.addListener((e) => {
            setIsMobile(!e.matches);
            setShowMenu(e.matches)
        })
    }, [])

    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <section className={"header__start"}>
                    {isMobile &&
                    <div className="mobile-menubar">
                        <HamburgerMenu
                            isOpen={showMenu}
                            menuClicked={handleShowMenu}
                            width={36}
                            height={30}
                            strokeWidth={1}
                            rotate={0}
                            color='black'
                            borderRadius={0}
                            animationDuration={0.5}
                            className="burger-icon"
                        />
                    </div>
                    }
                    {showMenu &&
                    <>
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
                                    <li className={"header__registration-btn"}><Link to="/rejestracja">Załóż
                                        konto</Link>
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
                    </>
                    }
                </section>
            </div>
        </header>
    )
}