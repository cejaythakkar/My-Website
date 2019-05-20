import React, { Component } from 'react';
import { connect } from 'react-redux';
import './spinner.css';
class Spinner extends Component {
  render() {
    return (
      <div className="spinner-wrapper" style={{display:this.props.showSpinner}}> 
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    showSpinner : state.spinner.showSpinner
  }
}
export default connect(mapStateToProps)(Spinner);