import React, {Component} from "react";
import IndexTop from "./IndexTop";
import IndexMiddle from "./IndexMiddle";


export default class Index extends Component {

    render() {
        return (
            <div className="container">
                <IndexTop/>
                <IndexMiddle/>
            </div>
        )
    }
}
