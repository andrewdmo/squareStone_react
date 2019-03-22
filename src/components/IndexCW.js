import React, {Component} from "react";
import IndexMiddleCW from "./IndexMiddleCW";
import IndexTopCW from "./IndexTopCW";

export default class IndexCW extends Component {

    render() {
        return (
            <div className='indexBack CW'>
                <IndexTopCW/>
                <IndexMiddleCW/>
            </div>
        )
    }
}
