import React, {useState, useEffect, useContext} from 'react';
import './stepConfirmFrom.scss'
import movementIcon from '../../assets/movement-Icon.png';
import shirtIcon from '../../assets/shirt-icon.png';
import {FirebaseContext} from "../../App";

export const StepConfirmForm = ({
                                    //--stepOne--//
                                    goodClothes,
                                    brokenClothes,
                                    toys,
                                    books,
                                    other,
                                    //--stepTwo--//
                                    numberOfBags,
                                    //--stepThree--//
                                    city,
                                    kids,
                                    mother,
                                    homeless,
                                    disabled,
                                    oldPeople,
                                    nameOrganization,
                                    //--stepFour--//
                                    pickUpStreet,
                                    pickUpCity,
                                    pickUpPostCode,
                                    pickUpPhoneNumber,
                                    pickUpDate,
                                    pickUpHour,
                                    pickUpComments,
                                    page,
                                    setPage
                                }) => {

    const {firebase} = useContext(FirebaseContext)
    const [things, setThings] = useState([]);
    const [toWho, setToWho] = useState([]);

    useEffect(() => {
        //----things----
        (goodClothes && setThings(things => [...things, " ubrania w dobry stanie,"]));
        (brokenClothes && setThings(things => [...things, " ubrania do wyrzucenia,"]));
        (toys && setThings(things => [...things, " zabawki,"]));
        (books && setThings(things => [...things, " książki,"]));
        (other && setThings(things => [...things, " inne,"]));

        //----toWho----
        (kids && setToWho(toWho => [...toWho, " dzieciom,"]));
        (mother && setToWho(toWho => [...toWho, " samotnym matkom,"]));
        (homeless && setToWho(toWho => [...toWho, " bezdomnym,"]));
        (disabled && setToWho(toWho => [...toWho, " niepełnosprawnym,"]));
        (oldPeople && setToWho(toWho => [...toWho, " osobom starszym,"]));
    }, [])

    const collection = {
        numberOfBags: numberOfBags,
        things: things,
        toWho: toWho,
        pickUpCity: pickUpCity,
        pickUpStreet: pickUpStreet,
        pickUpPostCode: pickUpPostCode,
        pickUpPhone: pickUpPhoneNumber,
        pickUpDate: pickUpDate,
        pickUpHour: pickUpHour,
        pickUpComments: pickUpComments,
    };

    const addDate = () => {
        const randomID = Math.random().toString(36).substr(2, 9);
        firebase.db.collection(`Users/${firebase.auth.currentUser.uid}/thingsCollection`).doc(randomID).set(collection)
            // .then(data => console.log("success"))
            .catch(err => console.log(err));
    }


    return (
        <section className={"steps__form-four"}>
            <div className={"steps__form-four-container"}>
                <h2 className={"steps__form-four-four-header"}>Podsumowanie Twojej darowizny</h2>
                <div className={"steps__form-four-section"}>
                    <h3 className={"content-address-four__header top"}>Oddajesz:</h3>
                    <div className={"steps__form-four-things"}>
                        <img src={shirtIcon} alt={"movement icon"}/>
                        <p>{numberOfBags !== 0 && <span>{numberOfBags} worki,</span>}
                            {things.map((thing, index) => <span key={index}>{thing}</span>)}
                            {toWho.map((item, index) => <span key={index}>{item}</span>)}
                        </p>
                    </div>
                    <div className={"steps__form-four-localization"}>
                        <img src={movementIcon} alt="shirt"/>
                        <p>dla lokalizacji: {city}</p>
                    </div>
                </div>
                <div className={"form-content-data"}>
                    <div className={"content-address-four"}>
                        <h3 className={"content-address-four__header"}>Adres odbioru:</h3>
                        <div className={"content-address-four__data"}>
                            <p>Ulica</p>
                            <p>{pickUpStreet}</p>
                        </div>
                        <div className={"content-address-four__data"}>
                            <p>Miasto</p>
                            <p>{pickUpCity}</p>
                        </div>
                        <div className={"content-address-four__data"}>
                            <p>Kod pocztowy</p>
                            <p>{pickUpPostCode}</p>
                        </div>
                        <div className={"content-address-four__data"}>
                            <p>Numer telefonu</p>
                            <p>{pickUpPhoneNumber}</p>
                        </div>
                    </div>

                    <div className={"content-term-text"}>
                        <h3 className={"content-term-text__header"}>Termin odbioru:</h3>
                        <div className={"content-term-text__data"}>
                            <p>Data</p>
                            <p>{pickUpDate}</p>
                        </div>
                        <div className={"content-term-text__data"}>
                            <p>Godzina</p>
                            <p>{pickUpHour}</p>
                        </div>
                        <div className={"content-term-text__data"}>
                            <p>Uwagi dla kuriera</p>
                            <p>{pickUpComments}</p>
                        </div>
                    </div>
                </div>
                <div className={"steps__form-buttons"}>
                    <button className={"btn-prev__confirm"}
                            onClick={e => {
                                e.preventDefault();
                                setPage(4);
                            }}>Wstecz
                    </button>
                    <button className={"btn-next"}
                            onClick={e => {
                                e.preventDefault();
                                setPage(6)
                                addDate();
                            }}>Potwierdzam
                    </button>
                </div>
            </div>
        </section>
    )
}




