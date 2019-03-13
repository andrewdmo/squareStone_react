import Clock from "./IndexTop";
import React, {Component} from "react";


export default class MenuBar extends Component {

    render() {
        return (
            <div className="ten columns menuBar">
                <h1 className="topTitle shadow">AG3: the Future of Now</h1>

                <p className="menuText shadow current">Home</p>

                <p className="menuText shadow none">Mapping
                </p>

                <p className="menuText shadow none">About
                </p>
            </div>
        )
    }
}
