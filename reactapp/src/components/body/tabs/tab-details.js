import React, { Component } from "react";
import ValidationItem from "../../../components/common/validation-item";
import tabData from "../../../containers/tabs/tabsData";
import TabDetailsTabInfo from "./tab-details-tab-info";
import TabDetailsFieldValidationList from "./tab-details-field-validation-list";
import TabDetailsFieldInfo from "./tab-details-field-info";

export default class Details extends Component {
  state = {
    tab: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tab: { ...tabData[this.props.match.params.tabId] }
      });
    }, 2000);
  }

  onValidationChangeHandler = (event, key, configField, inputType) => {
    const updatedTabData = { ...this.state.tab },
      configFormFields = { ...updatedTabData.configFormFields },
      updatedField = { ...configFormFields[configField] },
      validationField = { ...updatedField.validations },
      field = { ...validationField[key] };
    field.value = event.target.value;
    validationField[key] = field;
    updatedField.validations = validationField;
    configFormFields[configField] = updatedField;
    updatedTabData.configFormFields = configFormFields;

    this.setState({
      tab: updatedTabData
    });
  };

  onTabInfoChangeHandler = (event, inputType, field) => {
    const updatedTab = { ...this.state.tab },
      updatedTabInfo = { ...updatedTab.tabInfo },
      setting = { ...updatedTabInfo[field] };
    setting.value = event.target.value;
    updatedTabInfo[field] = setting;
    updatedTab.tabInfo = updatedTabInfo;
    this.setState({
      tab: updatedTab
    });
  };

  onFieldInputChangeHandler = args => {
    const event = args[0],
      configFormField = args[2],
      setting = args[3];

    const updatedTab = { ...this.state.tab },
      updatedConfigFormField = { ...updatedTab.configFormFields },
      updatedField = { ...updatedConfigFormField[configFormField] },
      fieldSetting = { ...updatedField[setting], value: event.target.value };

    updatedField[setting] = fieldSetting;
    updatedConfigFormField[configFormField] = updatedField;
    updatedTab.configFormFields = updatedConfigFormField;
    this.setState({
      tab: updatedTab
    });
  };
  render() {
    const createfieldsList = () => {
      const elementArray = [];
      if (this.state.tab) {
        for (let field in this.state.tab.configFormFields) {
          let configFormField = this.state.tab.configFormFields[field];
          elementArray.push(
            <li className="list-item" key={field}>
              <div className="item-wrapper card">
                <div className="card-body">
                  <TabDetailsFieldInfo
                    tab={this.state.tab}
                    property={field}
                    changed={(...args) => this.onFieldInputChangeHandler(args)}
                  />
                  <div>
                    <h5>validations</h5>
                    <div className="validation-list-wrapper">
                      <ul className="validation-list">
                        <TabDetailsFieldValidationList
                          validations={configFormField.validations}
                          configField={field}
                          changed={(event, key, configField, inputType) =>
                            this.onValidationChangeHandler(
                              event,
                              key,
                              configField,
                              inputType
                            )
                          }
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        }
        return elementArray;
      }
    };

    return (
      <div className="tab-details-wrapper">
        {!this.state.tab ? (
          <div className="spinner">Loading....</div>
        ) : (
          <div className="tab-details-card card">
            <div className="card-header">
              <h3>Details</h3>
            </div>
            <div className="card-body">
              <TabDetailsTabInfo
                tab={this.state.tab}
                changed={(event, inputType, field) => {
                  this.onTabInfoChangeHandler(event, inputType, field);
                }}
              />
              <div className="tab-fields-list-wrapper">
                <ul className="tab-fields-list">{createfieldsList()}</ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
