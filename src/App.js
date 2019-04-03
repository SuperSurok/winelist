import React, {Component} from "react";
import AppNavBar from "./components/layout/AppNavBar";

import {Provider} from "react-redux";
import store from "./store";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Wines from "./components/layout/Wines";

import AddClients from "./components/clients/AddClients";
import AddWines from "./components/wines/AddWines";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <AppNavBar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/client/add" component={AddClients}/>
                                <Route exact path="/Wines" component={Wines}/>
                                <Route exact path="/wine/add" component={AddWines}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
