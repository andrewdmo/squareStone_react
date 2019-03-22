import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Mapping from "./Mapping";
import Purchase from "./Purchase";
import IndexTop from "./IndexTop";



export default class IndexSqSt extends Component {

    render() {
        return (
            <div className="indexBack">
                <IndexTop/>
                <Switch>
                    <Route exact path={["/", "/index", "/home"]} component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/mapping" component={Mapping}/>
                    <Route exact path="/purchase" component={Purchase}/>

                </Switch>
            </div>
        )
    }
}
