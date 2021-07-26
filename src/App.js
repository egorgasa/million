import React from "react";
import Main from "./containers/MainPage/Main";
//import PageProject from "./containers/PageOneProject/PageProject";
import Projects from "./containers/ProjectsPage/Projects";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/projects">
                    <Projects/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}


export default App;
