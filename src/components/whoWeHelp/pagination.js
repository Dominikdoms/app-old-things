import React from "react"
import './pagination.scss'
import clc from "classnames"


export const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];//indexy postów

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    // console.log(pageNumbers)
    // console.log(`totalPost: ${totalPosts}`)
    // console.log(`postPerPage: ${postsPerPage}`)

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.length === 1 ? ('') : (
                    pageNumbers.map(number => (
                        <li key={number} className={"pagination__page-item"}>
                            <button onClick={() => paginate(number)} className={"pagination__page-btn"}>
                                {number}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    )
}