import React, {Component} from "react";
import IndexTop from "./IndexTop";
import Truck from "./Truck";
import IndexTopCW from "./IndexTopCW";

export default class CapturedWasteMiddle extends Component {

    render() {
        return (
            <div className="container">
                <div className="indexBack">
                    <IndexTopCW/>
                    <Truck/>
                </div>
            </div>
        )
    }
}
