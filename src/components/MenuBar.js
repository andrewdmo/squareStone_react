import React, {Component} from "react";
import {NavLink} from 'react-router-dom'
import Clock from "./Clock";


export default class MenuBar extends Component {

    render() {
        return (
            <div className="menuBar">
                <NavLink exact to="/"
                         className="menuText shadow">Home
                </NavLink>

                <NavLink exact to="/mapping"
                         className="menuText shadow">Mapping
                </NavLink>

                <NavLink exact to="/about"
                         className="menuText shadow">About
                </NavLink>
                <Clock/>
            </div>
        )
    }
}
