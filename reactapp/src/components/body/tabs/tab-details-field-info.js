import React from 'react'
import Input from '../../common/input/input';

export default function TabDetailsFieldInfo(props) {
    const createInfoFields = () => {
        const infofieldsArray = [];
        for(let field in props.tab.configFormFields[props.property]){
            if(field === 'validations')
                infofieldsArray.push(null);
            else{
                infofieldsArray.push(<Input  key={field}
                    id={field}
                    {...props.tab.configFormFields[props.property][field]} 
                    changed={(event,inputType) => {props.changed(event,inputType,props.property,field)}}
                    />)
            }
        }
        return infofieldsArray;
    }
  return (
    <div>
      {createInfoFields()}
    </div>
  )
}
