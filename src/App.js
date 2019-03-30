import React, {Component} from 'react';
import AppNavBar from './components/layout/AppNavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Wines from "./components/layout/Wines";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <AppNavBar/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/Wines" component={Wines}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;