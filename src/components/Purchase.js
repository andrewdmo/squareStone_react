import React, {Component} from 'react';


export default class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state = {

            purchasePrice: 0,
            appraisalFee: 0,
            surveyFee: 0,
            attyFee: 0,
            miscCost1: 0,
            miscCost2: 0,
            ph1EnvAssess: 0,
            ph2EnvAssess: 0,
            roofInsp: 0,
            addtCostSum: 0,
            purchaseTotal: 0,
            submitForm: false,
            submitMessage: 'Save?'
        };

        // this.fieldClick = this.fieldClick.bind(this);
        this.fieldChange = this.fieldChange.bind(this);
    }


    radioClick = (event) => {
        this.setState({
            strain: event.target.value
        })
    };


    formSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        if (this.state.submitForm !== false) {
            this.setState({
                // submitForm: true,
                submitMessage: 'NOT SAVED!!'
            })
        } else {
            this.setState({
                submitForm: !this.state.submitForm,
                submitMessage: 'Saved?!!'
            })
        }
    };

    fieldChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
                [name]: value,
            }, () => {
                this.setState({
                    addtCostSum: this.state.appraisalFee + this.state.roofInsp + this.state.ph1EnvAssess + this.state.ph2EnvAssess + this.state.attyFee + this.state.surveyFee + this.state.miscCost1 + this.state.miscCost2
                })
            }
        );


        console.log("addtCostSum: " + this.state.addtCostSum, "\npurchaseTotal: " + this.state.purchaseTotal);

    };

    render() {
        return (
            <fieldset>

                <form onSubmit={this.formSubmit}>
                    <table>
                        <caption>
                            <h2>Purchase Costs</h2>
                        </caption>

                        <tbody>
                        <tr>
                            <td>
                                <label className="tableField">
                                    Purchase Price
                                </label>
                                <input type="number" name="purchasePrice" value={this.state.purchasePrice}
                                       className="tableField"
                                       onChange={this.fieldChange}/>
                            </td>
                            <td/>
                        </tr>

                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <fieldset>
                                <legend>Fees</legend>
                                <td>
                                    <label>
                                        Appraisal Fee:
                                    </label>
                                    <input type="number" name="appraisalFee" value={this.state.appraisalFee}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                                <td>
                                    <label>
                                        Survey Fee:
                                    </label>
                                    <input type="number" name="surveyFee" value={this.state.surveyFee}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                                <td>
                                    <label>
                                        Attorney's Fee:
                                    </label>
                                    <input type="number" name="attyFee" value={this.state.attyFee}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                            </fieldset>
                        </tr>


                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <fieldset>
                                <legend>Miscellaneous Costs</legend>
                                <td>
                                    <label>
                                        Misc. #1:
                                    </label>
                                    <input type="number" name="miscCost1" value={this.state.miscCost1}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                                <td>
                                    <label>
                                        Misc. #2:
                                    </label>
                                    <input type="number" name="miscCost2" value={this.state.miscCost2}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                            </fieldset>
                        </tr>

                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <fieldset>
                                <legend>Environmental Assessment</legend>
                                <td>
                                    <label>
                                        Phase 1:
                                    </label>
                                    <input type="number" name="ph1EnvAssess" value={this.state.ph1EnvAssess}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                                <td>
                                    <label>
                                        Phase 2:
                                    </label>
                                    <input type="number" name="ph2EnvAssess" value={this.state.ph2EnvAssess}
                                           className="tableField"
                                           onChange={this.fieldChange}/>
                                </td>
                            </fieldset>
                        </tr>

                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <td>
                                <label>
                                    Roof Inspection
                                </label>
                                <input type="number" name="roofInsp" value={this.state.roofInsp} className="AGFormField"
                                       onChange={this.fieldChange}/>
                            </td>
                            <td/>
                        </tr>

                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <td/>
                            <td>
                                <label>
                                    Additonal Cost Sum:
                                </label>
                                <code>{this.state.addtCostSum}</code>
                            </td>
                        </tr>

                        <tr className={this.state.purchasePrice ? 'row' : 'row hidden'}>
                            <td/>
                            <td>
                                <label>
                                    Purchase Total Sum:
                                </label>
                                <code>{this.state.purchaseTotal}</code>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <input type="submit" value={this.state.submitMessage} onClick={this.formSubmit}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </fieldset>
        );
    }


}
