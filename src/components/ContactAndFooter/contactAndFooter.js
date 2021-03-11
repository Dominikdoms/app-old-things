import React from "react";
import './contactAndFooter.scss'
import {Contact} from "./contact"
import {Footer} from "./footer"

export const ContactAndFooter = () => {

    return(
        <div className={"container"}>
            <div className="img"/>
            <Contact/>
        </div>
    )
}