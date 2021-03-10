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

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/"><Home/></Route>
                    {/*<Route path="/"><SimpleSteps/></Route>*/}{/*dziwne, ze to nie działa*/}
                </Switch>
                <SimpleSteps/>
                <AboutUs/>
                <WhoWeHelp/>
            </>
        </BrowserRouter>
    );
}

export default App;
