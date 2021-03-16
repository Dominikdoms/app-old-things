import React from "react";



export const StepOneForm = ({
                                goodClothes, setGoodClothes,
                                brokenClothes, setBrokenClothes,
                                toys, setToys,
                                books, setBooks,
                                other, setOther,
                                page, setPage
                            }) => {


    return (
        <section>
            <div>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.</p>
            </div>
            <div>
                <p>Krok {page}/4</p>
                <h2>Zaznacz co chcesz oddać:</h2>
                <div>
                    <p>ubrania, które nadają się do ponownego użycia</p>
                    <input type="checkbox"
                           value={goodClothes}
                           onChange={() => setGoodClothes(!goodClothes)}
                    />
                </div>
                <div>
                    <p>ubrania, do wyrzucenia</p>
                    <input type="checkbox"
                           value={brokenClothes}
                           onChange={() => setBrokenClothes(!brokenClothes)}
                    />
                </div>
                <div>
                    <p>zabawki</p>
                    <input type="checkbox"
                           value={toys}
                           onChange={() => setToys(!toys)}
                    />
                </div>
                <div>
                    <p>książki</p>
                    <input type="checkbox"
                           value={books}
                           onChange={() => setBooks(!books)}
                    />
                </div>
                <div>
                    <p>inne</p>
                    <input type="checkbox"
                           value={other}
                           onChange={() => setOther(!other)}
                    />
                </div>
            </div>
            <button onClick={e => {
                e.preventDefault();
                setPage(2)
            }}>Dalej
            </button>
        </section>
    )
}







