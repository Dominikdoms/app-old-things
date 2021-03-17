import React, {useState, useEffect} from 'react';
import {firebaseData} from "../firebaseData"


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
        firebaseData.firestore().collection("Users/User2/thingsCollection").doc(randomID).set(collection)
            .then(data => console.log("success"))
            .catch(err => console.log(err));
    }


    return (
        <section>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <p>{numberOfBags !== 0 && <span>{numberOfBags} worki,</span>}
                {things.map((thing, index) => <span key={index}>{thing}</span>)}
                {toWho.map((item, index) => <span key={index}>{item}</span>)}
            </p>
            <p>dla lokalizacji: {city}</p>

            <div>
                <h3>Adres odbioru:</h3>
                <div>
                    <p>Ulica</p>
                    <p>{pickUpStreet}</p>
                </div>
                <div>
                    <p>Miasto</p>
                    <p>{pickUpCity}</p>
                </div>
                <div>
                    <p>Kod pocztowy</p>
                    <p>{pickUpPostCode}</p>
                </div>
                <div>
                    <p>Numer telefonu</p>
                    <p>{pickUpPhoneNumber}</p>
                </div>
            </div>

            <div>
                <h3>Termin odbioru:</h3>
                <div>
                    <p>Data</p>
                    <p>{pickUpDate}</p>
                </div>
                <div>
                    <p>Godzina</p>
                    <p>{pickUpHour}</p>
                </div>
                <div>
                    <p>Uwagi</p>
                    <p>{pickUpComments}</p>
                </div>
            </div>

            <div>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(4);
                }}>Wstecz
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(6)
                    addDate();
                }}>Potwierdzam
                </button>
            </div>
        </section>
    )
}




