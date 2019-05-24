import React, { Component } from "react";
import "./input.scss";
export default class Input extends Component {
  render() {
    switch (this.props.type) {
      case "checkbox":
        return (
          <div className={`form-element-wrapper row ${(this.props.classes)?this.props.classes.div:'row'}`}>
            <label for={this.props.id} className={`text-left col-form-label ${(this.props.classes)?this.props.classes.label:'col-2'}`}>
              {this.props.id}
            </label>
            <div className={`col text-left ${(this.props.classes)?this.props.classes.input:'col-10'}`}>
              <input
                type="checkbox"
                className="form-control checkbox"
                name={this.props.id}
                checked={this.props.value}
                onChange={event => {
                  this.props.changed(event, event.target.checked);
                }}
              />
            </div>
          </div>
        );
      // case 'date-picker':
      case "text":
        return (
          <div className={`form-element-wrapper row ${(this.props.classes)?this.props.classes.div:'row'}`}>
            <label for={this.props.id} className={`text-left col-form-label ${(this.props.classes)?this.props.classes.label:'col-2'}`}>
              {this.props.id}
            </label>
            <input
              type="text"
              className={`form-control text-left ${(this.props.classes)?this.props.classes.input:'col-10'}`}
              name={this.props.id}
              value={this.props.value}
              onChange={this.props.changed}
            />
          </div>
        );
      case "number":
        return (
          <div className={`form-element-wrapper row ${(this.props.classes)?this.props.classes.div:'row'}`}>
            <label for={this.props.id} className={`text-left col-form-label ${(this.props.classes)?this.props.classes.label:'col-2'}`}>
              {this.props.id}
            </label>
            <input
              type="text"
              className={`form-control text-left ${(this.props.classes)?this.props.classes.input:'col-10'}`}
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
