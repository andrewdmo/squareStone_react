import React, {Component} from 'react';
import squareStone from '../assets/squareStone.jpg';
import Index from './Index';

export default class Logo extends Component {
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
        if (this.state.spin !== 'topLogo clockwise') {
            this.setState({spin: 'topLogo clockwise'})
        } else {
            this.setState({spin: 'topLogo unclockwise'})
        }

        // MapContainer.forceUpdate = (e) => {
        //     console.log('forceUpdate e: ' + e);
        // };

    };

    render() {
        console.log('logoClick:' + this.state.spin);

        const logoSpin = this.state.spin + ' shadow';

        return (
            <img src={squareStone} className={logoSpin} onClick={this.logoClick} alt="logo"/>
        );
    }
}
