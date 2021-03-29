import React, {useContext, useState, useEffect} from "react";
import {
    Link, useLocation
} from 'react-router-dom';
import {Link as LinkScroll} from "react-scroll";
import clx from "classnames"
import "./homeHeader.scss"
import {FirebaseContext} from "../../App";
import HamburgerMenu from 'react-hamburger-menu';

export const HomeHeader = () => {
    const location = useLocation()
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
        isMobile && setShowMenu(!showMenu);
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
        <header className={clx({burgerOpen: showMenu}, "header")}>
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
                                    {!isMobile && <li>{authUser.email}</li>}
                                    <Link to="/">
                                        <li>Start</li>
                                    </Link>
                                    {location.pathname === '/oddaj-rzeczy' ? (
                                        <LinkScroll to="addThings"
                                                    smooth={true}
                                                    duration={500}
                                                    onClick={handleShowMenu}
                                        >
                                            <li className={"header__registration-btn"}>Oddaj rzeczy</li>
                                        </LinkScroll>
                                    ) : (
                                        <Link to="/oddaj-rzeczy">
                                            <li className={"header__registration-btn"}>Oddaj rzeczy</li>
                                        </Link>
                                    )}
                                    <Link to="/wylogowano">
                                        <li onClick={handleLogout}>wyloguj</li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/logowanie">
                                        <li>Zaloguj</li>
                                    </Link>
                                    <Link to="/rejestracja">
                                        <li className={"header__registration-btn"}>Załóż
                                            konto
                                        </li>
                                    </Link>
                                </>
                            )}
                        </ul>
                        <ul className={"header__navigation"}>
                            {location.pathname === "/oddaj-rzeczy" && isMobile &&
                            <Link to="/">
                                <li>Start</li>
                                </Link>
                            }

                            {location.pathname === "/" &&
                            <>
                                <LinkScroll to="steps"
                                            smooth={true}
                                            duration={1000}
                                            onClick={handleShowMenu}
                                >
                                    <li>O co chodzi?</li>
                                </LinkScroll>

                                <LinkScroll to="aboutUs"
                                            smooth={true}
                                            duration={1000}
                                            onClick={handleShowMenu}>
                                    <li>O nas</li>
                                </LinkScroll>
                                <LinkScroll to="fundations"
                                            smooth={true}
                                            duration={1000}
                                            onClick={handleShowMenu}>
                                    <li>Fundacja i Organizacje</li>
                                </LinkScroll>
                                <LinkScroll to="contact"
                                            smooth={true}
                                            duration={1000}
                                            onClick={handleShowMenu}>
                                    <li>Kontakt</li>
                                </LinkScroll>
                            </>
                            }
                        </ul>
                    </>
                    }
                </section>
            </div>
        </header>
    )
}