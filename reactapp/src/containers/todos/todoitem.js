import React from 'react';
import propTypes from 'prop-types';
import './todos.scss';
export default class TodoItem extends React.Component{
    todoItemClickHandler = () => {
        this.props.toggleCompletetodo(this.props.todo._id);
    }
    deleteButtonClickHandler = () => {
        this.props.deleteTodo(this.props.todo._id);
    }
    render(){
        let completed = this.props.todo.completed ? 'completed' : 'not-completed';
        let checked = this.props.todo.completed ? true : false;
        return (
            <div className={`todo-item ${completed}`}>
                <div className="chkbox-container">
                    <input type="checkbox" checked={checked} onClick={this.todoItemClickHandler} />
                </div>
                <h1 className="todo-title">{this.props.todo.title}</h1>
                <button className="delete-btn" onClick={this.deleteButtonClickHandler}>x</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}