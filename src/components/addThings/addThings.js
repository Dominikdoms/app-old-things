import React from "react"
import {AddThingsForm} from './addThingsForm'
import {AddThingsTopSection} from './addThingsTopSection'
import {Contact} from '../ContactAndFooter/contact.js'
import {Home} from "../Home";

export const AddThings = ({authUser, setAuthUser}) => {

    return (
        <>
            <AddThingsTopSection authUser={authUser} setAuthUser={setAuthUser}/>
            <AddThingsForm/>
            <Contact/>
        </>
    )
}