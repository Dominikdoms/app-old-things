import React from "react"
import {AddThingsForm} from './addThingsForm'
import {AddThingsTopSection} from './addThingsTopSection'
import {Contact} from '../ContactAndFooter/contact.js'

export const AddThings = () => {

    return (
        <>
            <AddThingsTopSection/>
            <AddThingsForm/>
            <Contact/>
        </>
    )
}