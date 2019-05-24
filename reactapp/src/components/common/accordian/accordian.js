import React, { Component } from 'react';
import './accordian.scss';

export default class Accordian extends Component {
    state={
        expanded:true
    }
    
    arrowButtonClickHandler = ( event ) => {
        this.setState(prevState => {
            return {
                expanded : !prevState.expanded
            }    
        })
    }

    render() {
        return (
            <div className={`accrodian-wrapper card ${(this.state.expanded)?'expanded':'collapsed'}`}>
                <div className="card-header">
                    <h3>{this.props.header}</h3>
                    <div className="action-button-container">
                        <button>Add</button>
                        <button onClick={this.arrowButtonClickHandler}>Expand/collapse</button>
                    </div>
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
