import React from "react";
import Signature from "../assets/Signature.svg"
import './aboutUs.scss'

export const AboutUs = () => {

    return (
        <section className={"about"} id={"aboutUs"}>
            <div className={"about container"}>
                <div className={"about__text"}>
                    <h3>O nas</h3>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className={"about__signature"} src={Signature} alt="Signature"/>
                </div>
                <div className={"about__background"}/>
            </div>
        </section>
    )
}