import React from "react";
import {useState} from "react"
import "./homeThreeColumns.scss"

export const HomeThreeColumns = () => {
    const [bags, setBags] = useState("10")//fetch
    const [organizations, setOrganizations] = useState("5")//fetch
    const [collections, setCollections] = useState("7")//fetch

    return (
        <>
            <section className={"home__tree-column"}>
                <div className={"home__column"}>
                    <h2 className={"home__count"}>{bags}</h2>
                    <h3 className={"home__header"}>ODDANYCH WORKÓW</h3>
                    <p className={"home__text"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

                <div className={"home__column"}>
                    <h2>{organizations}</h2>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

                <div className={"home__column"}>
                    <h2>{collections}</h2>
                    <h3>ZORGANIZOWANY ZBIÓREK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        </>
    )
}