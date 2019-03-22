import React, {Component} from "react";

import {Route, Switch} from "react-router-dom";
import IndexCW from "./IndexCW";
import Error from "./Error";
import IndexSqSt from "./IndexSqSt";

export default class Index extends Component {

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path={["/", "/index", "/home"]} component={IndexSqSt}/>
                    <Route exact path="/truck" component={IndexCW}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </div>
        )
    }
}
