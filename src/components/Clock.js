import React, {Component} from 'react';


export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    };

    render() {
        // console.log(this.state.time);

        return (
            <p className="clock">
                {this.state.time}
            </p>
        );
    }
}
