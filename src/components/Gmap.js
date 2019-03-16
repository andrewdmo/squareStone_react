import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
// import {center, zoom} from '../containers/Map.fitBounds';


// from: https://www.npmjs.com/package/google-map-react
// this is the 'circle' in middle of map
const ExampleComponent = ({message}) => (
    <div style={{
        color: 'white',
        border: '10px',
        borderColor: '#009750',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transition: 'all 1s',
        transform: 'translate(-50%, -50%)'
    }}>
        {message}
    </div>
);



export default class Gmap extends Component {

    // constructor(props) {
    //     super(props);
    //
    //             this.state = {
    //                 mapTypeId: ''
    //             };
    // } //constructor


    handleApiLoaded = (map, maps) => {
        map.setMapTypeId(this.props.mapTypeId);
        console.log(map.mapTypeId);
    };

    render() {

        console.log(this.props.mapTypeId);
        console.log(this.props.center);


        return (
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAEgsGQb9pHiOX0p8-VpZj46VMwOxg0csU'}}
                    center={this.props.center}
                    defaultZoom={7}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}>

                    <ExampleComponent style={{opacity: '1'}}
                                      lat={this.props.coords.currentCoords.lat}
                                      lng={this.props.coords.currentCoords.lng}
                                      message={this.props.currentMessage + '\n' + this.props.coords.currentCoords.lat.toFixed(4) + '\n' + this.props.coords.currentCoords.lng.toFixed(4) + '\n' + this.props.coords.currentCoords.workDate}/>
                </GoogleMapReact>
            </div>
        );
    }
}
