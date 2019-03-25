import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

export default class MapBalloons extends Component {

    render() {
        return (
            <div>
                <a data-tip="React-tooltip"> ◕‿‿◕ </a>

                <ReactTooltip
                    place="top"
                    type="dark"
                    effect="float"/>
            </div>
        )
    }
}
