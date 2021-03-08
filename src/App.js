import React from "react"
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './../src/sass/main.scss';
import {Home} from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/">
                        {/*/!**!/*/}
                        <Home/>
                    </Route>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;
