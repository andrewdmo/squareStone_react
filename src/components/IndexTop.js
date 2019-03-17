import React, {Component} from 'react';
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import Clock from "./Clock";
import TitleBar from "./TitleBar";

export default class IndexTop extends Component {

    render() {
        return (
            <div className="top">
                <MenuBar/>
                <TitleBar/>
                <Logo/>
            </div>
        )
    }
}
