import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Misc/Navbar";
import Home from "./Components/Home/Home";

function Router(){
    return <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route exact path = "/">
            <Home/>
            </Route>
        <Route path = "/Chat">Chat</Route>
        
            
            
    </Switch>
    </BrowserRouter>
}

export default Router;