import React, { Component } from 'react'

export default class modal extends Component {
    state={
        show:true
    }
    closeHandler = ( event ) => {
        this.setState(prevState => {
            return {
                show:false
            }   
        })
    }
    showHandler
    render() {
        return (
            <div className="modal-wrapper">
                <header>
                    <h3>this.props.header</h3>
                    <button>X</button>
                </header>
                <main>
                    <this.props.children closeHandler={this.closeHandler}/>
                </main>
            </div>
        )
    }
}
