import React, {useState} from "react"
import './pagination.scss'
import clx from "classnames"


export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const [current, setCurrent] = useState(1)
        console.log(current)

    const pageNumbers = [];//indexy postów

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }




    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.length === 1 ? ('') : (
                    pageNumbers.map(number => (
                        <li key={number} className={"pagination__page-item"}>
                            <button onClick={() => {paginate(number)
                                setCurrent(number)}}
                                    className={clx({active: current === number})}>
                                {number}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    )
}