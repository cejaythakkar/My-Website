import React from 'react';
export default class AddTodo extends React.Component{
    state = {
        title : ''
    }
    titlechangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }
    render(){
        return (
            <div className="addtodo-container">
                <form onSubmit={this.formSubmitHandler} className="addtodo-form">
                    <input type="text" 
                        name="title" 
                        value={this.state.title}
                        onChange={this.titlechangeHandler}
                        placeholder="Add a Todo..." />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}