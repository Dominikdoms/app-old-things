import React, {useState, useEffect} from "react";
import {firebaseData} from "./firebaseData"


export const AddThings = () => {
    const [state, setState] = useState([])
    console.log(state)
    const bag = {
        street: "Gruszkowa"
    }

    const handleClick = () => {
        const randomID = Math.random().toString(36).substr(2, 9);

        firebaseData.firestore().collection("Users/User2/bags").doc(randomID).set(bag)

        //     .then(console.log("sss"))
        //     // .then(data)
        //     .catch(err => console.log(err))
        // // console.log("ssss")
            .then((docRef) => {
                // console.log("Document written with ID: ", docRef.id);
                // console.log("Document written with ID: ", docRef);
            })
            .catch((error) => {
                // console.error("Error adding document: ", error);
            });
    }

    useEffect(() => {
        firebaseData.firestore().collection("Users/User2/bags").onSnapshot((querySnapshot) => {
                const collection = [];
                querySnapshot.forEach((snap) => {
                    collection.push(snap.data())
                })
                setState(collection)
            }
        )
        // .then(r => r.json).catch(err => console.log(err))
    },[])




    return (

        <button onClick={handleClick}>ddddddd </button>
    )
}