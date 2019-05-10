import React, { Component } from 'react';
import CounterOutput from '../../components/counteroutput';
import CounterControl from '../../components/countercontrol';
import { connect } from 'react-redux'
import { increment , decrement , add , subtract , reset , storeResult , deleteResult } from '../../store/actions/index';

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
            return dispatch(increment())
        },
        onDecrementCounter:() => {
            return dispatch(decrement())
        },
        onAddCounter:(val) => {
            return dispatch(add(val))
        },
        onSubtractCounter:(val) => {
            return dispatch(subtract(val))
        },
        onResetCounter:() => {
            return dispatch(reset())
        },
        onStoreResult:(payload) => {
            return dispatch(storeResult(payload))
        },
        onDeleteResult:(payload) => {
            return dispatch(deleteResult(payload))
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);