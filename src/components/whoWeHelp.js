import React from "react";
import {Link, Switch, Route} from "react-router-dom"
import './whoWeHelp.scss'

export const WhoWeHelp = () => {

    return (
        <section className={"fundations"} id="fundations">
            <div className={"fundations__container"}>
                <h2 className={"fundations__header"}>Komu pomagamy?</h2>
                <nav>
                    <ul className={"fundations__nav"}>
                        <li><button><Link to="/fundacje">Fundacjom</Link></button></li>
                        <li><button><Link to="/organizacje">Organizacjom <br/> Pozarządowym</Link></button></li>
                        <li className={"fundation__btn"}><button><Link to="/zbiorki">Lokalnym <br/> zbiórkom</Link></button></li>
                    </ul>
                </nav>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym
                    się zajmują, komu pomagają i czego potrzebują.</p>
                <Switch>
                    <Route path="/fundacje"> </Route>
                    <Route path="/organizacje"> </Route>
                    <Route path="/zbiorki"> </Route>
                </Switch>
            </div>
        </section>
    )
}