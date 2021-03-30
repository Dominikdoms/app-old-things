import React from "react"
import './stepTwoForm.scss'
import {StepThreeForm} from "./stepThreeForm";


export const StepTwoForm = ({numberOfBags, setNumberOfBags, page, setPage}) => {

    return (
        <>
            <section className={"steps__warning"}>
                <div className={"steps__warning-container"}>
                    <h2 className={"steps__warning-header"}>Ważne!</h2>
                    <p className={"steps__warning-text"}>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
            </section>
            <section className={"steps__form-two"}>
                <div className={"steps__form-two-container"}>
                    <div className={"steps__form-two-content"}>
                        <p className={"steps__form-two-count"}>Krok {page}/4</p>
                        <h2 className={"steps__form-two-header"}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                        <label className={"steps__form-two-label"}>Liczba 60l worków: &nbsp; &nbsp;
                            <select className={"steps__form-two-select"}
                                    value={numberOfBags}
                                    onChange={e => setNumberOfBags(e.target.value)}>
                                <option>— wybierz —</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </label>

                    </div>
                    <div className={"steps__form-buttons"}>
                        <button className={"btn-prev"}
                                onClick={e => {
                            e.preventDefault();
                            setPage(1)
                        }}>Wstecz
                        </button>
                        <button className={"btn-next"}
                                onClick={e => {
                            e.preventDefault();
                            setPage(3)
                        }}>Dalej
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
