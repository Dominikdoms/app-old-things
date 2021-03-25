import React from "react"
import {HomeHeader} from "./home/HomeHeader"
import {HomeHelp} from './home/HomeHelp'
import {HomeThreeColumns} from "./home/HomeThreeColumns";

export const Home = ({authUser, setAuthUser}) => {

    return (

        <>
            <HomeHeader authUser={authUser} setAuthUser={setAuthUser}/>
            <HomeHelp/>
            <HomeThreeColumns/>
        </>
    )
}