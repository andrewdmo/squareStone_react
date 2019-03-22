import React, {Component} from 'react';
import './App.css';
import Index from "./components/Index";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Index/>
            </BrowserRouter>
        );
    }
}

export default App;
