import React, {Component} from 'react';
import Clock from "./Clock";
import TitleBarCW from "./TitleBarCW";
import LogoCW from "./LogoCW";


export default class IndexTopCW extends Component {

    render() {
        return (
            <div className="top">
                <LogoCW/>
                <TitleBarCW/>
                <Clock/>
            </div>
        )
    }
}
