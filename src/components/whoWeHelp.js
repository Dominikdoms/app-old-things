import React, {useState, useEffect} from "react";
import clx from 'classnames';
import './whoWeHelp.scss'
import {Pagination} from "./whoWeHelp/pagination";

export const WhoWeHelp = () => {

    // https://react-hook-form.com/get-started#SchemaValidation
    // Step 2: Prepare your schema for validation and register inputs with React Hook Form.


    const API = "http://localhost:3000/"
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
        fetch(`${API}${current}`)
            .then(response => response.json())
            .then(data => {
                setOrganizations(data)
                // console.log(data.length)
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
                    // organizations.map(el => (
                    currentPosts.map(el => (
                        <section key={el.id} className={"fundations__list"}>
                            <div className={"fundations__list-items"}>
                                <li className={"fundations__list-items-name"}>{`${fundations} "${el.name}"`}</li>
                                <li className={"fundations__list-items-target"}>{el.target}</li>
                            </div>
                            <li className={"fundations__list-things"}>{el.things}</li>
                        </section>
                    ))
                }</ul>
                <Pagination postsPerPage={postsPerPage} totalPosts={organizations.length} paginate={paginate} current={currentPage}/>
            </div>
        </section>
    )
}

