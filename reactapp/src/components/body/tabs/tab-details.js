import React, { Component } from 'react'
import ValidationItem from '../../../components/common/validation-item';
import tabData from '../../../containers/tabs/tabsData';

export default class Details extends Component {

    state = {
        tab: null
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tab: tabData.filter(tab => tab._id === parseInt(this.props.match.params.tabId))[0]
            });
        }, 2000);
    }

    render() {
        const createValidationList = (validations) => {
            const validationList = [];
            for (let validation in validations) {
                let validationEl = (
                    // <li className="list-item">
                    //     <div className="item-wrapper">
                    //         <span>{validation}</span>
                    //     </div>
                    // </li>
                    <ValidationItem type={validation} value={validations[validation]} />
                );
                validationList.push(validationEl)
            }
            return validationList;
        }
        return (
            <div className="tab-details-wrapper">
                {(!this.state.tab) ? (<div className="spinner">Loading....</div>) : (
                    <div className="tab-details-card card">
                        <div className="card-header">
                            <h3>Details</h3>
                        </div>
                        <div className="card-body">
                            <div className="tab-info-item row">
                                <label>{`Tab Name:`}</label>
                                <p>{this.state.tab.tabName}</p>
                            </div>
                            <div className="tab-info-item row">
                                <label>{`Is Configurable:`}</label>
                                <p>{this.state.tab.isConfigurable ? 'true' : 'false'}</p>
                            </div>
                            <div className="tab-info-item row">
                                <label>{`Tab Description:`}</label>
                                <p>{this.state.tab.tabDescription}</p>
                            </div>
                            <div className="tab-fields-list-wrapper">
                                <ul className="tab-fields-list">
                                    {
                                        this.state.tab.configFields.map(field => (
                                            <li className="list-item">
                                                <div className="item-wrapper card">
                                                    <div className="card-body">
                                                        <div className="info-item row">
                                                            <label>{'Field Name:'}</label>
                                                            <p>{field.fieldName}</p>
                                                        </div>
                                                        <div className="info-item row">
                                                            <label>{'Field Type:'}</label>
                                                            <p>{field.fieldType}</p>
                                                        </div>
                                                        <div className="info-item row">
                                                            <label>{'Field Description:'}</label>
                                                            <p>{field.fieldDescription}</p>
                                                        </div>
                                                        <div>
                                                            <h5>validations</h5>
                                                            <div className="validation-list-wrapper">
                                                                <ul class="validation-list">
                                                                    {
                                                                        createValidationList(field.validations)
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        )
    }
}
