import * as React from 'react';
export default class Add extends React.Component{
    state = {
        title:'',
        subtitle:'',
        place:'',
        description:'',
    }

    onChangeHandler = ( event ) => {

        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render(){
        return (
            <div className="add-about-wrapper">
                <form className="add-about-form form-group">
                    <input type="text" name="title" value={this.state.title} className="form-control" onChange={this.onChangeHandler} placeholder="Enter the Title" />
                    <input type="text" name="subtitle" value={this.state.subtitle} className="form-control" onChange={this.onChangeHandler} placeholder="Enter the Subtitle" />
                    <input type="text" name="place" value={this.state.place} className="form-control" onChange={this.onChangeHandler} placeholder="Enter the place" />
                    <textarea name="description" value={this.state.description}  className="form-control" onChange={this.onChangeHandler} placeholder="Enter the description"></textarea>
                    <button type="button" className="btn" onClick={this.formSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}