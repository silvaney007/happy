import React from "react";
import {BrowserRouter, Route , Switch} from "react-router-dom";
import Landing from "./pages/Landing";


function Routes () {
return (
<BrowserRouter>
<Switch>
    <Route path ='/' component ={Landing}/>
</Switch>
</BrowserRouter>

)


}

export default Routes