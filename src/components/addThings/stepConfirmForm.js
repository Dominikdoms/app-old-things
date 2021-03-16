import React from 'react';


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


    return (
        <section>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz</h3>
            <p></p>
            <div>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(4)
                }}>Wstecz
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    setPage(6)
                }}>Potwierdzam
                </button>
            </div>
        </section>
    )
}




