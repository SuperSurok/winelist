import React, {Component} from 'react';
import AppNavBar from './components/layout/AppNavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Hello There!</h1>
                    <AppNavBar/>
                </div>
            </Router>
        );
    }
}

export default App;