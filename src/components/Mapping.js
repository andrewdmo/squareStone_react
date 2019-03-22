import React, {Component} from 'react';
import Gmap from "./Gmap";


export default class Mapping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coords: {
                currentCoords: {
                    lat: 35.9657642,
                    lng: -78.9567109,
                    heading: -95,
                    workDate: new Date().toLocaleTimeString()
                },
                lastCoords: {
                    lat: 35.1111, lng: -82.0003, workDate: ''
                },
                priorCoords: {
                    lat: 35.0001, lng: -82.0002, workDate: ''
                },
                initialCoords: {
                    lat: 35.3333, lng: -82.0001, workDate: ''
                },
            }, // coords

            currentMessage: 'default',
            mapTypeId: '',
            mapTypeControl: false,
            fullScreenControl: true,
            fullScreenControlOptions: {position: 'BOTTOM_LEFT'},


            center: {lat: 35.965, lng: -78.956, heading: -95},

        } //this.state

    } //constructor


    render() {


        return (
            <div>
                <div className='mapArea topMarg'>
                    <Gmap coords={this.state.coords}
                          center={this.state.center}
                          mapTypeId='roadmap'
                    />
                </div>


                <div className='mapArea'>
                    <Gmap coords={this.state.coords}
                          center={this.state.center}
                          mapTypeId='satellite'
                    />
                </div>

                <div className='mapArea'>
                    <Gmap coords={this.state.coords}
                          center={this.state.center}
                          mapTypeId='hybrid'
                    />
                </div>

                <div className='mapArea'>
                    <Gmap coords={this.state.coords}
                          center={this.state.center}
                          mapTypeId='terrain'
                    />
                </div>
            </div>
        )
    }
}
