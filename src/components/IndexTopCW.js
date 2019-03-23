import React, {Component} from 'react';
import Clock from "./Clock";
import TitleBarCW from "./TitleBarCW";


export default class IndexTopCW extends Component {

    render() {
        return (
            <div className="top">
                <TitleBarCW/>
                <Clock/>
            </div>
        )
    }
}
