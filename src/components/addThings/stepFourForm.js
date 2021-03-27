import React from "react";
// import './stepFourFrom.scss';

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
        <>
            <section className={"steps__warning"}>
                <div className={"steps__warning-container"}>
                    <h2 className={"steps__warning-header"}>Ważne!</h2>
                    <p className={"steps__warning-text"}>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
            </section>
            <section className={"steps__form"}>
                <div className={"steps__form-container"}>
                    <div>
                        <p className={"steps__form-count"}>Krok {page}/4</p>
                        <h2 className={"steps__form-header"}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                        <section className={"content-courier"}>
                            <div className={"content-address"}>
                                <h3 className={"content-address__header"}>Adres odbioru:</h3>
                                <div className={"content-address__inputs"}>
                                    <p>Ulica</p>
                                    <input type={"text"}
                                           value={pickUpStreet}
                                           onChange={e => setPickUpStreet(e.target.value)}
                                    />
                                </div>
                                <div className={"content-address__inputs"}>
                                    <p>Miasto</p>
                                    <input type={"text"}
                                           value={pickUpCity}
                                           onChange={e => setPickUpCity(e.target.value)}
                                    />
                                </div>
                                <div className={"content-address__inputs"}>
                                    <p>Kod Pocztowy</p>
                                    <input type={"text"}
                                           value={pickUpPostCode}
                                           onChange={e => setPickUpPostCode(e.target.value)}
                                    />
                                </div>
                                <div className={"content-address__inputs"}>
                                    <p>Numer telefonu</p>
                                    <input type={"text"}
                                           value={pickUpPhoneNumber}
                                           onChange={e => setPickUpPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"content-term"}>
                                <h3 className={"content-term__header"}>Termin odbioru:</h3>
                                <div className={"content-term__inputs"}>
                                    <p>Data</p>
                                    <input type={"text"}
                                           value={pickUpDate}
                                           onChange={e => setPickUpDate(e.target.value)}
                                    />
                                </div>
                                <div className={"content-term__inputs"}>
                                    <p>Godzina</p>
                                    <input type={"text"}
                                           value={pickUpHour}
                                           onChange={e => setPickUpHour(e.target.value)}
                                    />
                                </div>
                                <div className={"content-term__textarea"}>
                                    <p>Uwagi dla kuriera</p>
                                    <textarea value={pickUpComments}
                                              onChange={e => setPickUpComments(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>


                    <div>
                        <button className={"btn-prev"}
                                onClick={e => {
                                    e.preventDefault();
                                    setPage(3)
                                }}>Wstecz
                        </button>
                        <button className={"btn-next"}
                                onClick={e => {
                                    e.preventDefault();
                                    setPage(5)
                                }}>Dalej
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}