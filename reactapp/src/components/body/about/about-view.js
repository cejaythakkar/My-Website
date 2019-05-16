import * as React from 'react';
import { withRouter } from 'react-router-dom'
class View extends React.Component{
    render(){
        console.log(this.props.match.params)
        return (
            <div>
                <h1>Add New About Screen</h1>
            </div>
        )
    }
}

export default withRouter(View);