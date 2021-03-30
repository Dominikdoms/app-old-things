import React, {useContext} from "react";
import {
    Link
} from 'react-router-dom';
import "./WelcomeSection.scss"
import {FirebaseContext} from "../../App";


export const WelcomeSection = () => {
    const {authUser} = useContext(FirebaseContext)

    return (
        <section className={"welcome"}>
            <div className={"welcome__container container"}>
                <section className={"welcome__start"}>
                    <section className={"welcome__give-things"}>
                        <h1>Zacznij Pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <ul className={"welcome__buttons"}>
                            {authUser ? (
                                <>
                                    <button className={"welcome__btn"}><Link
                                        to={"/oddaj-rzeczy"}>ODDAJ <br/> RZECZ</Link></button>
                                    <button className={"welcome__btn"}><Link to={"/"}>ZORGANIZUJ ZBIÓRKĘ</Link></button>
                                </>
                            ) : (
                                <>
                                    <button className={"welcome__btn"}><Link to={"/logowanie"}>ODDAJ <br/> RZECZ</Link>
                                    </button>
                                    <button className={"welcome__btn"}><Link to={"/logowanie"}>ZORGANIZUJ ZBIÓRKĘ</Link>
                                    </button>
                                </>
                            )}
                        </ul>
                    </section>
                </section>
            </div>
        </section>
    )
}