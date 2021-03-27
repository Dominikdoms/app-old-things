import React from "react";
import People from "../assets/People.png"
// import './aboutUs.scss'

export const AboutUs = () => {

    return (
        <section className={"about"} id={"aboutUs"}>
            <div className={"about container"}>
                <div className={"about__text"}>
                    <h3>O nas</h3>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className={"about__image"}>
                    {/*<img className={"about__img"} src={People} alt="people"/>*/}
                </div>
            </div>
        </section>
    )
}