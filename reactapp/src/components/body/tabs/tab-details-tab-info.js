import React from "react";
import Input from "../../common/input/input";

export default function TabDetailsTabInfo(props) {
  const createTabInfoFields = () => {
    const tabInfoFieldsArray = [];
    for (let field in props.tab.tabInfo) {
      let tabInfoField = props.tab.tabInfo[field];
      tabInfoFieldsArray.push(
        <Input key={field} id={field} {...tabInfoField} 
            changed={( event , inputType) => {props.changed(event , inputType,field)}}
        />
      );
    }
    return tabInfoFieldsArray;
  };
  return <React.Fragment>{createTabInfoFields()}</React.Fragment>;
}
