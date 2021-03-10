import React, {useState, useEffect} from "react";
import clx from 'classnames';
import './whoWeHelp.scss'

export const WhoWeHelp = () => {
    const API = "http://localhost:3000/"
    const [organizations, setOrganizations] = useState([]);
    const [current, setCurrent] = useState('fundation');
    const [fundations, setFundations] = useState('')

    const handleCurrent = e => {
        const {id} = e.target;
        setCurrent(id)
    }

    useEffect(() => {
        fetch(`${API}${current}`)
            .then(response => response.json())
            .then(data => {
                setOrganizations(data)
            })
            .catch(err => console.log(err))

        if (current === "fundation") setFundations("Fundacja")
        if (current === "organization") setFundations("Organizacja")
        if (current === "collection") setFundations("Zbiórka")
    }, [current])


    return (
        <section className={"fundations"} id="fundations">
            <div className={"fundations__container"}>
                <h2 className={"fundations__header"}>Komu pomagamy?</h2>
                <nav>
                    <ul className={"fundations__nav"}>
                        <li>
                            <button className={clx({active: current === "fundation"})} id="fundation"
                                    onClick={handleCurrent}>Fundacjom
                            </button>
                        </li>
                        <li>
                            <button className={clx({active: current === "organization"})} id="organization"
                                    onClick={handleCurrent}>Organizacjom <br/> Pozarządowym
                            </button>
                        </li>
                        <li>
                            <button className={clx({active: current === "collection"})} id="collection"
                                    onClick={handleCurrent}>Lokalnym <br/> zbiórkom
                            </button>
                        </li>
                    </ul>
                </nav>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym
                    się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className={"fundations__all"}>{
                    organizations.map(el => (
                        <section key={el.id} className={"fundations__list"}>
                            <div className={"fundations__list-items"}>
                                <li className={"fundations__list-items-name"}>{`${fundations} "${el.name}"`}</li>
                                <li className={"fundations__list-items-target"}>{el.target}</li>
                            </div>
                            <li className={"fundations__list-things"}>{el.things}</li>
                        </section>
                    ))
                }</ul>
            </div>
        </section>
    )
}

