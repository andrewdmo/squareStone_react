import React, {Component} from "react";
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";
import {BrowserRouter} from "react-router-dom";


export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <IndexTop/>
                    <IndexMiddle/>
                </div>
            </BrowserRouter>
        )
    }
}
