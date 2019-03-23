import React, {Component} from 'react';
import Clock from "./IndexTopCW";

export default class TitleBarCW extends Component {

    render() {
        return (
            <div>
                <div className="profile name">

                    <p className="text shadow link">CWTE
                    </p>

                    <p className="text shadow link">Captured Waste to Energy
                    </p>
                </div>
            </div>
        )
    }
}
