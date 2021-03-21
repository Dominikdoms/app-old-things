import React from "react"
import {HomeHeader} from "./home/HomeHeader"
import {HomeThreeColumns} from "./home/HomeThreeColumns";

export const Home = ({authUser}) => {

    return (

        <>
            <HomeHeader authUser={authUser}/>
            <HomeThreeColumns/>
        </>
    )
}