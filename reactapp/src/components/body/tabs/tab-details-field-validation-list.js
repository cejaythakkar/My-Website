import React from 'react'
import Input from '../../common/input/input';

export default function TabDetailsFieldValidationList(props) {
    const createValidationList = () => {
        const validationList = [];
        for (let key in props.validations) {
          let validationEl = (
            <Input
              key={key}
              id={key}
              {...props.validations[key]}
              changed={( event , inputType ) => props.changed(event, key, props.configField,inputType)}
            />
          );
          validationList.push(validationEl);
        }
        return validationList;
      };
  return (
    <React.Fragment>
      {createValidationList()}
    </React.Fragment>
  )
}
