import React from "react";
import './simpleSteps.scss'
import {Link} from "react-router-dom"

export const SimpleSteps = () => {

    return (
        <section className={"steps"} id={"steps"}>
            <h2 className={"steps__header"}>Wystarczą 4 proste kroki</h2>

            <div className={"steps__four"}>
                <div className="container">
                    <div className={"steps__one shirt"}>
                        <p>Wybierz rzeczy</p>
                        <span/>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className={"steps__one bag"}>
                        <p>Spakuj je</p>
                        <span/>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className={"steps__one magnifier"}>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <span/>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"steps__one movement"}>
                        <p>Zamów kuriera</p>
                        <span/>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className={"steps__button"}>
                <Link to="/logowanie">
                    <button className={"steps__btn"}>ODDAJ <br/> RZECZ</button>
                </Link>
            </div>

        </section>
    )
}