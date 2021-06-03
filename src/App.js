import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import CountryIndex from "./Components/CountryIndex";
import CountryDetail from "./Components/CountryDetail";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={routeProps => <CountryIndex {...routeProps} />}
              ></Route>
              <Route
                path="/:country"
                render={routeProps => <CountryDetail {...routeProps} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
