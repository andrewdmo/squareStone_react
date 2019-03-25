import React, {Component} from 'react';
import Truck from "./Truck";
import MapMain from "./MapMain";

export default class IndexMiddleCW extends Component {


    render() {

        return (
            <div className="middle CW">
                <MapMain/>
                <Truck/>
            </div>
        )
    }
}
