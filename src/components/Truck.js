import React, {Component} from 'react';
import LogoCW from "./LogoCW";


export default class Truck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            spin: 'topLogo clockwise', //todo: cleanup vars
            truck: {
                truckLoc: 'right',
                truckDump: false
            }
        };


        // This binding is necessary to make `this` work in the callback
        this.truckClick = this.truckClick.bind(this);
    }

    truckClick() {
        if (this.state.truck.truckLoc === 'right') {
            this.setState({
                truck: {
                    truckLoc: 'left'
                }
            });
            // console.log('right > left');
        } else if (this.state.truck.truckLoc === 'left') {
            this.setState({
                truck: {
                    truckLoc: 'site'
                }
            });
            // console.log('left > site');

        } else {
            this.setState({
                truck: {
                    truckLoc: 'right'
                }
            });
            // console.log('site > right');

        }
    }

    render() {
        const truckState = "truck " + this.state.truck.truckLoc + " " + this.state.truck.truckDump;

        console.log(truckState);

        return (
            <div>
                <LogoCW/>
                <div
                    className={truckState}
                    onClick={this.truckClick}/>
            </div>
        )
    }
}
