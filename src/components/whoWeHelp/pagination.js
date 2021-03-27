import React from "react"
// import './pagination.scss'
import clx from "classnames"


export const Pagination = ({postsPerPage, totalPosts, paginate, current}) => {

    const pageNumbers = [];//indexy postów

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav>
            <ul className="pagination">
                {/*if pageNumbers === 1 - don't show btns*/}
                {pageNumbers.length === 1 ? ('') : (
                    pageNumbers.map(number => (
                        <li key={number} className={"pagination__page-item"}>
                            <button onClick={() => {
                                paginate(number);
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