import React from "react"
import clx from "classnames"
// import './stepThreeForm.scss';


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
        <>
            <section className={"steps__warning"}>
                <div className={"steps__warning-container"}>
                    <h2 className={"steps__warning-header"}>Ważne!</h2>
                    <p className={"steps__warning-text"}>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                        organizacji w wyszukiwarce. Możesz też
                        filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
            </section>
            <section className={"steps__form"}>
                <div className={"steps__form-container"}>
                    <div className={"steps__form-content"}>
                        <p className={"steps__form-count"}>Krok {page}/4</p>


                        <h2 className={"steps__form-header"}>Lokalizacja:</h2>
                        <select className={"steps__form-select"}
                                value={city} onChange={e => setCity(e.target.value)}>
                            <option>— wybierz —</option>
                            <option value={"Poznań"}>Poznań</option>
                            <option value={"Warszawa"}>Warszawa</option>
                            <option value={"Kraków"}>Kraków</option>
                            <option value={"Wrocław"}>Wrocław</option>
                            <option value={"Katowice"}>Katowice</option>
                        </select>

                        <p className={"steps__form-description"}>Komu chcesz pomóc?</p>
                        <section className={"steps__form-checkboxes"}>
                            <label className="checkbox-btn">
                                <input type={"checkbox"}
                                       value={kids}
                                       onChange={() => setKids(!kids)}
                                />
                                <span className={clx({active: kids}, "checkbox-btn-kids")}>dziecion</span>
                            </label>
                            <label className="checkbox-btn">
                                <input type={"checkbox"}
                                       value={mother}
                                       onChange={() => setMother(!mother)}
                                />
                                <span className={clx({active: mother}, "checkbox-btn-mother")}>samotnym matkom</span>
                            </label>
                            <label className="checkbox-btn">
                                <input type={"checkbox"}
                                       value={homeless}
                                       onChange={() => setHomeless(!homeless)}
                                />
                                <span className={clx({active: homeless}, "checkbox-btn-homeless")}>bezdomnym</span>
                            </label>
                            <label className="checkbox-btn">
                                <input type={"checkbox"}
                                       value={disabled}
                                       onChange={() => setDisabled(!disabled)}
                                />
                                <span className={clx({active: disabled}, "checkbox-btn-disabled")}>niepełnosprawnym</span>
                            </label>
                            <label className="checkbox-btn">
                                <input type={"checkbox"}
                                       value={oldPeople}
                                       onChange={() => setOldPeople(!oldPeople)}
                                />
                                <span className={clx({active: oldPeople}, "checkbox-btn-oldPeople")}>osobom sarszym</span>
                            </label>
                        </section>
                        <p className={"steps__form-description"}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input className={"input-text"} value={nameOrganization}
                               onChange={e => setNameOrganization(e.target.value)}
                        />
                    </div>

                    <div>
                        <button className={"btn-prev"}
                                onClick={e => {
                                    e.preventDefault();
                                    setPage(2)
                                }}>Wstecz
                        </button>
                        <button className={"btn-next"}
                                onClick={e => {
                                    e.preventDefault();
                                    setPage(4)
                                }}>Dalej
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}