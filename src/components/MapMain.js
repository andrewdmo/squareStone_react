import React, {Component} from 'react';
import CW_Back from "../assets/CW_backFinal.jpg";
import MapBalloons from "./MapBalloons";


export default class MapMain extends Component {

    render() {
        return (
            <div>
                <img src={CW_Back} className="mainMap CW" alt="mainMap"/>
                <MapBalloons/>
            </div>
        )
    }
}
