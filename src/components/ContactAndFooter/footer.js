import React from "react";
import "./footer.scss"
import {ReactComponent as Insta} from '../../assets/instagram-brands.svg';
import {ReactComponent as Facebook} from '../../assets/facebook-square-brands.svg';


export const Footer = () => {

    return (
        <div className={"footer"}>

            <p className={"footer__text"}>Copyright by Coders Lab</p>
            <div className={"footer__icons"}>
                <a className={"footer__icons-insta"}
                   target={"_blank"}
                   href="https://www.instagram.com/"><Insta/></a>

                <a className={"footer__icons-facebook"}
                   target={"_blank"}
                   href="https://www.facebook.com/dominik.rolewski.3/"><Facebook/></a>
            </div>
        </div>
    )
}
