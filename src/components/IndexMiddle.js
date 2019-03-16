import React, {Component} from 'react';
import ButtonField from "./ButtonField";
import Mapping from "./Mapping";


export default class IndexMiddle extends Component {

    render() {
        return (
            <div className="middle">
                <ButtonField/>
                <Mapping/>
            </div>
        )
    }
}
