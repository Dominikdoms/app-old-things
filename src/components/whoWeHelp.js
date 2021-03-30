import React, {useState, useEffect, useContext} from "react";
import clx from 'classnames';
import './whoWeHelp.scss'
import {Pagination} from "./whoWeHelp-pagination/pagination";
import {FirebaseContext} from "../App";

export const WhoWeHelp = () => {
    const {firebase} = useContext(FirebaseContext)

    // const API = "http://localhost:3000/"
    const [organizations, setOrganizations] = useState([]);
    const [current, setCurrent] = useState('fundation');
    const [fundations, setFundations] = useState([])

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);//obecna strona
    const [postsPerPage] = useState(3)//ile postów na stronie

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage //index ostatniego posta
    const indexOfFirstPost = indexOfLastPost - postsPerPage //index pierwszego posta
    const currentPosts = organizations.slice(indexOfFirstPost, indexOfLastPost)//obecny post

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleCurrent = e => {
        const {id} = e.target;
        setCurrentPage(1)
        setCurrent(id)
    }

    useEffect(() => {
        firebase.db.collection(`${current}`).onSnapshot((querySnapshot) => {
                const collection = [];
                querySnapshot.forEach((snap) => {
                    collection.push(snap.data())
                })
                setOrganizations(collection)
            }
        )

        if (current === "fundation") setFundations("Fundacja")
        if (current === "organization") setFundations("Organizacja")
        if (current === "collection") setFundations("Zbiórka")
    }, [current])


    return (
        <section className={"fundations"} id="fundations">
            <div className={"fundations__container"}>
                <h2 className={"fundations__header"}>Komu pomagamy?</h2>
                <ul className={"fundations__nav"}>
                    <li className={clx({active: current === "fundation"})} id="fundation"
                        onClick={handleCurrent}>Fundacjom
                    </li>
                    <li className={clx({active: current === "organization"})} id="organization"
                        onClick={handleCurrent}>Organizacjom <br/> Pozarządowym
                    </li>
                    <li className={clx({active: current === "collection"})} id="collection"
                        onClick={handleCurrent}>Lokalnym <br/> zbiórkom
                    </li>
                </ul>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym
                    się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className={"fundations__all"}>{
                    currentPosts.map((el, index) => (
                        <section key={index} className={"fundations__list"}>
                            <div className={"fundations__list-items"}>
                                <li className={"fundations__list-items-name"}>{`${fundations} "${el.name}"`}</li>
                                <li className={"fundations__list-items-target"}>{el.target}</li>
                            </div>
                            <li className={"fundations__list-things"}>{el.things}</li>
                        </section>
                    ))
                }</ul>
                <Pagination postsPerPage={postsPerPage}
                            totalPosts={organizations.length}
                            paginate={paginate}
                            current={currentPage}
                />
            </div>
        </section>
    )
}

