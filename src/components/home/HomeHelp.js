import React, {useContext} from "react";
import {
    Link
} from 'react-router-dom';
import "./homeHeader.scss"
import HeroImage from "../../assets/Hero-Image.png"
import {FirebaseContext} from "../../App";


export const HomeHelp = () => {
    const {authUser} = useContext(FirebaseContext)

    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <section className="header__img">
                    <img alt={"things"} src={HeroImage}/>
                </section>
                <section className={"header__start"}>
                    <section className={"header__give-things"}>
                        <h1>Zacznij Pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <ul className={"header__buttons"}>
                            {authUser ? (
                                <>
                                    <button className={"header__btn"}><Link
                                        to={"/oddaj-rzeczy"}>ODDAJ <br/> RZECZ</Link></button>
                                    <button className={"header__btn"}><Link to={"/"}>ZORGANIZUJ ZBIÓRKĘ</Link></button>
                                </>
                            ) : (
                                <>
                                    <button className={"header__btn"}><Link to={"/logowanie"}>ODDAJ <br/> RZECZ</Link>
                                    </button>
                                    <button className={"header__btn"}><Link to={"/logowanie"}>ZORGANIZUJ ZBIÓRKĘ</Link>
                                    </button>
                                </>
                            )}
                        </ul>
                    </section>
                </section>
            </div>
        </header>
    )
}