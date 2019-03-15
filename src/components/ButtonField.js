import React, {Component} from 'react';


export default class ButtonField extends Component {

    render() {
        return (
            <section className="main text">
                <button>
                    Purchase Costs
                </button>
                <button>
                    Revenue
                </button>


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
