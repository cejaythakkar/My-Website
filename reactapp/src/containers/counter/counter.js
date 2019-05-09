import React, { Component } from 'react';
import CounterOutput from '../../components/counteroutput';
import CounterControl from '../../components/countercontrol';
import { connect } from 'react-redux'
import ActionType from '../../store/actiontype';

class Counter extends Component {
  render() {
    return (
        <React.Fragment>
            <div style={counterWrapperStyle}>
                <CounterOutput counterValue={this.props.ctr} />
                <div style={counterControlWrapperStyle} >
                    <CounterControl label="increment" clickHandler={this.props.onIncrementCounter} />
                    <CounterControl label="decrement" clickHandler={this.props.onDecrementCounter}/>
                    <CounterControl label="Add" value={10} clickHandler={(val) => this.props.onAddCounter(val)} />
                    <CounterControl label="Subtract" value={10} clickHandler={(val) => this.props.onSubtractCounter(val)} />
                    <CounterControl label="reset" clickHandler={this.props.onResetCounter} />
                </div>
            </div>
            <CounterControl label="store result" clickHandler={() => this.props.onStoreResult(this.props.ctr)} />
            <ul>
                {
                    this.props.storedResults.map(result => {
                        return (
                            <li onClick={() => {this.props.onDeleteResult(result.id)}} key={result.id}>{result.value}</li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
  }
}

const counterWrapperStyle = {
    display:'flex',
    flexDirection : 'column',
    borderBottom:'1px solid #303e3e',
    padding:'1rem',
    margin:'1rem'
}
const counterControlWrapperStyle = {
    display:'flex',
    flexDirection : 'row',
    justifyContent : 'center'
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:() => {
            return dispatch({
               type:ActionType.INCREMENT
            })
        },
        onDecrementCounter:() => {
            return dispatch({
               type:ActionType.DECREMENT
            })
        },
        onAddCounter:(val) => {
            return dispatch({
               type:ActionType.ADD,
               payload : val
            })
        },
        onSubtractCounter:(val) => {
            return dispatch({
               type:ActionType.SUBTRACT,
               payload : val
            })
        },
        onResetCounter:() => {
            return dispatch({
               type:ActionType.RESET
            })
        },
        onStoreResult:(payload) => {
            return dispatch({
               type:ActionType.STORE_RESULT,
                payload:payload
            })
        },
        onDeleteResult:(payload) => {
            return dispatch({
               type:ActionType.DELETE_RESULT,
               payload:payload
            })
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);