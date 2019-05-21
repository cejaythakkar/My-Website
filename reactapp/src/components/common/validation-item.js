import React from 'react'

export default function ValidationItem(props) {
    const createValidationItem = (type, value) => {
        console.log(value);
        switch (type) {
            case 'required':
                return (
                    <li className="list-item">
                        <div className="validation-item-wrapper">
                            <label>{type}</label>
                            <input type="checkbox" checked={value} />
                        </div>
                    </li>
                );
            default:
                return null;
        }

    };

    return (
        <React.Fragment>
            {createValidationItem(props.type,props.value)}
        </React.Fragment>
    )
}
