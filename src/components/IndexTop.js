import React, {Component} from 'react';
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import Clock from "./Clock";

export default class IndexTop extends Component {

    render() {
        return (
            <div className="top">
                <Logo/>
                <MenuBar/>
            </div>
        )

    }
}
