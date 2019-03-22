import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class ButtonField extends Component {

    render() {
        return (
            <section className="main text">
                <NavLink exact to="/purchase" className="button">
                    Purchase Costs
                </NavLink>
                <NavLink exact to="/revenue" className="button">
                    Revenue
                </NavLink>


                <button>
                    Space Dimensions
                </button>

                <button>
                    Operating Costs
                </button>
            </section>
        )
    }
}
