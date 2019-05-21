import React, { Component } from "react";

export default class Input extends Component {
  render() {
    switch (this.props.type) {
      case "checkbox":
        return (
          <div className="form-element-wrapper row">
            <label for={this.props.id} className="form-check-label">
              {this.props.id}
            </label>
            <input
              type="checkbox"
              className="form-check-input form-control"
              name={this.props.id}
              checked={this.props.value}
              onChange={(event) => {
                this.props.changed(event,event.target.checked)
              }}
            />
          </div>
        );
      // case 'date-picker':
      case "text":
        return (
          <div className="form-element-wrapper row">
            <label for={this.props.id} className="col-form-label col">
              {this.props.id}
            </label>
            <input
              type="text"
              className="form-control col"
              name={this.props.id}
              value={this.props.value}
              onChange={this.props.changed}              
            />
          </div>
        );
      case "number":
        return (
          <div className="form-element-wrapper row">
            <label for={this.props.id} className="col-form-label col">
              {this.props.id}
            </label>
            <input
              type="text"
              className="form-control col"
              name={this.props.id}
              value={this.props.value}
              onChange={this.props.changed}              
            />
          </div>
        );
      // case 'textarea':
      // case 'select':
      default:
        return null;
    }
  }
}
