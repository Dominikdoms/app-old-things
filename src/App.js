import React from "react"
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './../src/sass/main.scss';
import {Home} from "./components/Home";
import {SimpleSteps} from "./components/simple-steps"

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/"><Home/></Route>
                    {/*<Route path="/"><SimpleSteps/></Route>*/}{/*dziwne, ze to nie działa*/}
                </Switch>
                <SimpleSteps/>
            </>
        </BrowserRouter>
    );
}

export default App;
