import React, { createContext, useEffect, useState } from "react"
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './../src/sass/main.scss';
import {Home} from "./components/Home";
import {SimpleSteps} from "./components/simpleSteps"
import {AboutUs} from "./components/about-us"
import {WhoWeHelp} from "./components/whoWeHelp";
import {ContactAndFooter} from "./components/ContactAndFooter/contactAndFooter"
import {Login} from "./components/login";
import {Register} from "./components/register";
import {LogOut} from "./components/logOut";
import {AddThings} from './components/addThings/addThings'
import Firebase from './components/firebaseData'

export const FirebaseContext = createContext(null)

function App() {
    const [authUser, setAuthUser] = useState(null);
    const firebase = new Firebase()
    console.log(authUser)
    useEffect(() => {
        firebase.auth.onAuthStateChanged(authUser => {
            if(authUser) {
                setAuthUser(authUser);
            } else {
                setAuthUser(null);
            }
        })
    }, []);


    return (
        <FirebaseContext.Provider value={{firebase: new Firebase(), authUser, setAuthUser}}>
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path="/">
                        <Home authUser={authUser} setAuthUser={setAuthUser}/>
                        <SimpleSteps authUser={authUser}/>
                        <AboutUs/>
                        <WhoWeHelp/>
                        <ContactAndFooter/>
                    </Route>
                    <Route path="/logowanie" exact component={Login}/>
                    <Route path="/rejestracja" exact component={Register}/>
                    <Route path="/wylogowano" exact component={LogOut}/>
                    <Route path="/oddaj-rzeczy" exact><AddThings authUser={authUser} setAuthUser={setAuthUser}/>
                    </Route>
                </Switch>
            </>
        </BrowserRouter>
        </FirebaseContext.Provider>
    );
}

export default App;
