import React, {Component} from 'react';


export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state.time = new Date().toLocaleString();
    }

    render() {
        return (
            <p className="menuBarFieldBack clock">
                The time is {this.state.time}.
            </p>
        );
    }
}
