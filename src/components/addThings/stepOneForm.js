import React from "react";
// import './stepOneForm.scss'
import clx from "classnames"

export const StepOneForm = ({
                                goodClothes, setGoodClothes,
                                brokenClothes, setBrokenClothes,
                                toys, setToys,
                                books, setBooks,
                                other, setOther,
                                page, setPage
                            }) => {

    return (
        <>
            <section className={"steps__warning"} id={"addThings"}>
                <div className={"steps__warning-container"}>
                    <h2 className={"steps__warning-header"}>Ważne!</h2>
                    <p className={"steps__warning-text"}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                        będziemy
                        wiedzieć komu najlepiej je
                        przekazać.</p>
                </div>
            </section>

            <section className={"steps__form"}>
                <div className={"steps__form-container"}>
                    <div className={"steps__form-content"}>
                        <p className={"steps__form-count"}>Krok {page}/4</p>
                        <h2 className={"steps__form-header"}>Zaznacz co chcesz oddać:</h2>
                        <div>
                            <label className={"checkbox"}>
                                <input type="checkbox"
                                       value={goodClothes}
                                       onChange={() => setGoodClothes(!goodClothes)}
                                />
                                ubrania, które nadają się do ponownego użycia
                                <span className={clx({active: goodClothes})}/>
                            </label>

                        </div>
                        <div>
                            <label className={"checkbox"}>
                                <input type="checkbox"
                                       value={brokenClothes}
                                       onChange={() => setBrokenClothes(!brokenClothes)}
                                />
                                ubrania, do wyrzucenia
                                <span className={clx({active: brokenClothes})}/>
                            </label>
                        </div>
                        <div>
                            <label className={"checkbox"}>
                                <input type="checkbox"
                                       value={toys}
                                       onChange={() => setToys(!toys)}
                                />
                                zabawki
                                <span className={clx({active: toys})}/>
                            </label>
                        </div>
                        <div>
                            <label className={"checkbox"}>
                                <input type="checkbox"
                                       value={books}
                                       onChange={() => setBooks(!books)}
                                />
                                książki
                                <span className={clx({active: books})}/>
                            </label>
                        </div>
                        <div>
                            <label className={"checkbox"}>
                                <input type="checkbox"
                                       value={other}
                                       onChange={() => setOther(!other)}
                                />
                                inne
                                <span className={clx({active: other})}/>
                            </label>
                        </div>
                    </div>
                    <button className={"btn-next"} onClick={e => {
                        e.preventDefault();
                        setPage(2)
                    }}>Dalej
                    </button>
                </div>
            </section>
        </>
    )
}







