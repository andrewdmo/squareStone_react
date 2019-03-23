import React, {Component} from 'react';
import capturedWaste from '../assets/capturedWaste.jpg';
import {NavLink} from "react-router-dom";

export default class LogoCW extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            spin: 'topLogo clockwise', //todo: cleanup vars
        };


        // This binding is necessary to make `this` work in the callback
        this.logoClick = this.logoClick.bind(this);
    }


    // use state for rotation/effects:
    logoClick = () => {
        // e.preventDefault(); //prevent default link behavior


        // console.log('updateLat: ' + this.updatePos.coords.lat);
        // let a = updatePos;
        //updatePos location (vs full refresh)
        // console.log('updatePos: ' + updatePos);

        //change rotation on click
        if (this.state.spin !== 'topLogo unclockwise') {
            this.setState({spin: 'topLogo clockwise'})
        } else {
            this.setState({spin: 'topLogo unclockwise'})
        }

        // MapContainer.forceUpdate = (e) => {
        //     console.log('forceUpdate e: ' + e);
        // };

    };

    render() {
        console.log(this.state.spin);

        const logoSpinCW = this.state.spin + ' shadow';

        return (
            <NavLink exact to="/truck">
                <img src={capturedWaste} className={logoSpinCW} onClick={this.logoClick} alt="logo"/>
            </NavLink>
        );
    }
}
