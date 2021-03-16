import React from "react"

export const StepFourForm = ({
                                 pickUpStreet, setPickUpStreet,
                                 pickUpCity, setPickUpCity,
                                 pickUpPostCode, setPickUpPostCode,
                                 pickUpPhoneNumber, setPickUpPhoneNumber,
                                 pickUpDate, setPickUpDate,
                                 pickUpHour, setPickUpHour,
                                 pickUpComments, setPickUpComments,
                                 page, setPage
                             }) => {


    return (
        <section>
            <div>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div>
                <p>Krok {page}/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                <div>
                    <h3>Adres odbioru:</h3>
                    <div>
                        <p>Ulica</p>
                        <input type={"text"}
                               value={pickUpStreet}
                               onChange={e => setPickUpStreet(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Miasto</p>
                        <input type={"text"}
                               value={pickUpCity}
                               onChange={e => setPickUpCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Kod Pocztowy</p>
                        <input type={"text"}
                               value={pickUpPostCode}
                               onChange={e => setPickUpPostCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Numer telefonu</p>
                        <input type={"text"}
                               value={pickUpPhoneNumber}
                               onChange={e => setPickUpPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h3>Termin odbioru</h3>
                    <p>Data</p>
                    <input type={"text"}
                           value={pickUpDate}
                           onChange={e => setPickUpDate(e.target.value)}
                    />
                    <p>Godzina</p>
                    <input type={"text"}
                           value={pickUpHour}
                           onChange={e => setPickUpHour(e.target.value)}
                    />
                    <p>Uwagi dla kuriera</p>
                    <textarea value={pickUpComments}
                              onChange={e => setPickUpComments(e.target.value)}
                    />
                </div>

            </div>
            <div>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(3)
                }}>Wstecz
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(5)
                }}>Dalej
                </button>
            </div>
        </section>
    )
}