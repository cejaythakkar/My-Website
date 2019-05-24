import React, { Component } from 'react'
import ValidationData from './validationData';
export default class ValidationAdd extends Component {
    render() {
        const options = {};
        for(let item in ValidationData){
            options.push((<option value={item}>{ValidationData[item]}</option>))
        }
        return (
            <div className="add-validation-wrapper">
                <label>Validation Type</label>
                <select>{options}</select>
                <button>Add Validation</button>
            </div>
        )
    }
}
