import React from "react"
import {HomeHeader} from "./home/HomeHeader"
import {WelcomeSection} from './home/WelcomeSection'
import {HomeThreeColumns} from "./home/HomeThreeColumns";

export const Home = ({authUser, setAuthUser}) => {

    return (

        <>
            <HomeHeader authUser={authUser} setAuthUser={setAuthUser}/>
            <WelcomeSection/>
            <HomeThreeColumns/>
        </>
    )
}