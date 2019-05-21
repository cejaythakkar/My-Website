import React, { Component } from 'react'

export default class Input extends Component {
    
  render() {
    switch(this.props.type){
        case 'checkbox':
            return (<input type="checkbox" />)
        case 'date-picker':
        case 'text':
        case 'textarea':
        case 'select':
        default:
            return null
    }
  }
}
