import Clock from "./IndexTop";
import React, {Component} from "react";


export default class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {page: "menuText shadow CURRENT"};
    }

    render() {
        return (
            <div className="menuBar">
                <p className={this.state.page}>Home
                </p>

                <p className="menuText shadow NONE">Mapping
                </p>

                <p className="menuText shadow NONE">About
                </p>
            </div>
        )
    }
}
