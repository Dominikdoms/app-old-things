import React from "react"
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

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                        <SimpleSteps/>
                        <AboutUs/>
                        <WhoWeHelp/>
                        <ContactAndFooter/>
                    </Route>
                    <Route path="/logowanie" exact component={Login}/>
                    <Route path="/rejestracja" exact component={Register}/>
                    <Route path="/wylogowano" exact component={LogOut}/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;
