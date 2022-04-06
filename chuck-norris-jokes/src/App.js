import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Sports from "./Sports";
import Movies from "./Movies";
import Animals from "./Animals";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/animals">
          <Animals />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
