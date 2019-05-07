import * as React from 'react';
class PassionList extends React.Component{
    state = {
        passionList : []
    }
    render(){
        return (
            <div className="passion-list-container">
                <h1>Passion List</h1>
            </div>
        );
    }
}

export default PassionList;