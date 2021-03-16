import React from "react"
import {StepThreeForm} from "./stepThreeForm";


export const StepTwoForm = ({numberOfBags, setNumberOfBags, page, setPage}) => {

    return (
        <section>
            <div>
                <h2>Ważne!</h2>
                <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div>
                <p>Krok {page}/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                <p>Liczba 60l worków:</p>
                <select value={numberOfBags} onChange={e => setNumberOfBags(e.target.value)}>
                    <option>— wybierz —</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

            </div>
            <div>
            <button onClick={e => {
                e.preventDefault();
                setPage(1)
            }}>Wstecz
            </button>
            <button onClick={e => {
                e.preventDefault();
                setPage(3)
            }}>Dalej
            </button>
            </div>
        </section>
    )
}
