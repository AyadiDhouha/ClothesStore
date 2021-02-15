import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Body from "./Components/Body";
import Men from "./Components/Men";
import Women from "./Components/Women";
function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
             <Route exact path='/' >
                <Body/>
             </Route>
             <Route path='/Men'>
                <Men/>
             </Route>
             <Route exact path='/Women' >
                <Women/>
             </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
