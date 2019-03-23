import React, {Component} from 'react';
import LogoCW from "./LogoCW";


export default class TruckDump extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        // This binding is necessary to make `this` work in the callback
        this.tiltDump = this.tiltDump.bind(this);
    }

    tiltDump() {
        if (this.props.truck.truckDump === false) {

            const a = "" +
                "<div className='truck down'";
            this.setState({
                truck: {
                    truckLoc: 'left',
                    truckDump: {a}
                }
            });
            // console.log('right > left');
        } else if (this.state.truck.truckLoc === 'left') {
            this.setState({
                truck: {
                    truckLoc: 'site',
                    truckDump: 'false'
                }
            });
            // console.log('left > site');

        } else if ((this.state.truck.truckLoc === 'site') && (this.state.truck.truckDump === false)) {
            this.setState({
                truck: {
                    truckLoc: 'site',
                    truckDump: 'true'
                }
            });
            // console.log('site > right');
        } else {
            this.setState({
                    truck: {
                        truckLoc: 'site',
                        truckDump: 'false'
                    }
                }, () => {
                    this.setState({
                        truck: {
                            truckLoc: 'right',
                            truckDump: 'false'
                        }
                    })
                }
            )
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
