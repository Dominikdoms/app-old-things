import React from "react";
import './addThingsTopSection.scss';

export const AddThingsTopSection = () => {
    return (
        <header className={"add-things"}>
            <div className={"add-things__container container"}>

                <section className={"add-things__start"}>
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