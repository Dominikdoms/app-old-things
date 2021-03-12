import React, {useState, useEffect} from "react"
import './pagination.scss'
import clx from "classnames"


export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const [current, setCurrent] = useState(1)
    // console.log(current)

    const pageNumbers = [];//indexy postów

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    // useEffect(() => {
        //if pageNumbers.length === 1 - set pagination on First pages
        pageNumbers.length === 1 && (paginate(1))
    // }, [current])


    return (
        <nav>
            <ul className="pagination">
                {/*if pageNumbers === 1 - don't show btns*/}
                {pageNumbers.length === 1 ? ('') : (
                    pageNumbers.map(number => (
                        <li key={number} className={"pagination__page-item"}>
                            <button onClick={() => {
                                paginate(number);
                                setCurrent(number)
                            }}
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