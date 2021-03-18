import React, {useState} from "react";
import {StepOneForm} from "./stepOneForm"
import {StepTwoForm} from "./stepTwoForm";
import {StepThreeForm} from "./stepThreeForm";
import {StepFourForm} from "./stepFourForm";
import {StepConfirmForm} from './stepConfirmForm'
import {StepFinalForm} from './stepFinalForm'

export const AddThingsForm = () => {
    //--------stepOne--------
    const [goodClothes, setGoodClothes] = useState(false);
    const [brokenClothes, setBrokenClothes] = useState(false);
    const [toys, setToys] = useState(false);
    const [books, setBooks] = useState(false);
    const [other, setOther] = useState(false);
    const [state, setState] = useState({

    })
    //--------stepTwo--------
    const [numberOfBags, setNumberOfBags] = useState(0);
    //--------stepThree------
    const [city, setCity] = useState('')
    const [kids, setKids] = useState(false)
    const [mother, setMother] = useState(false)
    const [homeless, setHomeless] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [oldPeople, setOldPeople] = useState(false)
    const [nameOrganization, setNameOrganization] = useState('')
    //--------stepFour-------
    const [pickUpStreet, setPickUpStreet] = useState('')
    const [pickUpCity, setPickUpCity] = useState('')
    const [pickUpPostCode, setPickUpPostCode] = useState('')
    const [pickUpPhoneNumber, setPickUpPhoneNumber] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [pickUpHour, setPickUpHour] = useState('')
    const [pickUpComments, setPickUpComments] = useState('')

    //--------allSteps-------
    const [page, setPage] = useState(5)

    return (
        <>
            {page === 1 &&
            <StepOneForm
                goodClothes={goodClothes} setGoodClothes={setGoodClothes}
                brokenClothes={brokenClothes} setBrokenClothes={setBrokenClothes}
                toys={toys} setToys={setToys}
                books={books} setBooks={setBooks}
                other={other} setOther={setOther}
                page={page} setPage={setPage}
            />}
            {page === 2 &&
            <StepTwoForm
                numberOfBags={numberOfBags} setNumberOfBags={setNumberOfBags}
                page={page} setPage={setPage}
            />}
            {page === 3 &&
            <StepThreeForm
                city={city} setCity={setCity}
                kids={kids} setKids={setKids}
                mother={mother} setMother={setMother}
                homeless={homeless} setHomeless={setHomeless}
                disabled={disabled} setDisabled={setDisabled}
                oldPeople={oldPeople} setOldPeople={setOldPeople}
                nameOrganization={nameOrganization} setNameOrganization={setNameOrganization}
                page={page} setPage={setPage}
            />}
            {page === 4 &&
            <StepFourForm
                pickUpStreet={pickUpStreet} setPickUpStreet={setPickUpStreet}
                pickUpCity={pickUpCity} setPickUpCity={setPickUpCity}
                pickUpPostCode={pickUpPostCode} setPickUpPostCode={setPickUpPostCode}
                pickUpPhoneNumber={pickUpPhoneNumber} setPickUpPhoneNumber={setPickUpPhoneNumber}
                pickUpDate={pickUpDate} setPickUpDate={setPickUpDate}
                pickUpHour={pickUpHour} setPickUpHour={setPickUpHour}
                pickUpComments={pickUpComments} setPickUpComments={setPickUpComments}
                page={page} setPage={setPage}
            />}
            {page === 5 &&
            <StepConfirmForm
                goodClothes={goodClothes} brokenClothes={brokenClothes}
                toys={toys} books={books} other={other}
                //--------stepTwo--------
                numberOfBags={numberOfBags}
                //--------stepThree------
                city={city} kids={kids} mother={mother} homeless={homeless}
                disabled={disabled} oldPeople={oldPeople}
                nameOrganization={nameOrganization}
                //--------stepFour-------
                pickUpStreet={pickUpStreet}
                pickUpCity={pickUpCity}
                pickUpPostCode={pickUpPostCode}
                pickUpPhoneNumber={pickUpPhoneNumber}
                pickUpDate={pickUpDate}
                pickUpHour={pickUpHour}
                pickUpComments={pickUpComments}
                page={page} setPage={setPage}
            />}
            {page === 6 &&
            <StepFinalForm/>}
        </>
    )
}