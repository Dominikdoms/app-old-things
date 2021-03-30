import React from "react"
import {AddThingsForm} from './addThingsForm'
import {AddThingsTopSection} from './addThingsTopSection'
import {Contact} from '../ContactAndFooter/contact.js'
import {HomeHeader} from '../home/HomeHeader'

export const AddThings = ({authUser, setAuthUser}) => {

    return (
        <>
            <HomeHeader/>
            <AddThingsTopSection authUser={authUser} setAuthUser={setAuthUser}/>
            <AddThingsForm/>
            <Contact/>
        </>
    )
}