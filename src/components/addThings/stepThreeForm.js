import React from "react"


export const StepThreeForm = ({
                                  city, setCity,
                                  kids, setKids,
                                  mother, setMother,
                                  homeless, setHomeless,
                                  disabled, setDisabled,
                                  oldPeople, setOldPeople,
                                  nameOrganization, setNameOrganization,
                                  page, setPage
                              }) => {


    return (
        <section>
            <div>
                <h2>Ważne!</h2>
                <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <div>
                <p>Krok {page}/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                <p>Lokalizacja:</p>
                <select value={city} onChange={e => setCity(e.target.value)}>
                    <option>— wybierz —</option>
                    <option value={"Poznań"}>Poznań</option>
                    <option value={"Warszawa"}>Warszawa</option>
                    <option value={"Kraków"}>Kraków</option>
                    <option value={"Wrocław"}>Wrocław</option>
                    <option value={"Katowice"}>Katowice</option>
                </select>

                <p>Komu chcesz pomóc?</p>
                <input type={"checkbox"} value={kids} onChange={() => setKids(!kids)}/>
                <input type={"checkbox"} value={mother} onChange={() => setMother(!mother)}/>
                <input type={"checkbox"} value={homeless} onChange={() => setHomeless(!homeless)}/>
                <input type={"checkbox"} value={disabled} onChange={() => setDisabled(!disabled)}/>
                <input type={"checkbox"} value={oldPeople} onChange={() => setOldPeople(!oldPeople)}/>

                <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input value={nameOrganization} onChange={e => setNameOrganization(e.target.value)}/>
            </div>
            <div>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(2)
                }}>Wstecz
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(4)
                }}>Dalej
                </button>
            </div>
        </section>
    )
}