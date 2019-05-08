import React from 'react';
import TodoItem from './todoitem';
import propTypes from 'prop-types';
import AddTodo from './addtodo';
import uuid from 'uuid';
import './todos.scss';
export default class Todos extends React.Component{
    state = {
        todos : [
          {
            _id : uuid.v4(),
            title : `lunch @ 1.30 pm`,
            description : `take lunch @ 1.30 pm`,
            completed : false
          },
          {
            _id : uuid.v4(),
            title : `Call Jigu`,
            description : `call Jigu in the evening`,
            completed : false
          },
          {
            _id : uuid.v4(),
            title : `enquiry for the second hand car`,
            description : `enquiry for the second hand car`,
            completed : true
          },
        ]
      };
      
    toggleCompleteTodo = (_id) => {
        this.setState({
            todos : this.state.todos.map(todo => {
                if(_id === todo._id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    addTodo = (title) => {
        let aNewTodo = {
            _id : uuid.v4(),
            title,
            desctiption : title,
            completed : false
        }
        this.setState({
            todos : [...this.state.todos,aNewTodo]
        })
    }

    deleteTodo = (_id) => {
        this.setState({
            todos : this.state.todos.filter(todo => (todo._id !== _id))
        })
    }

    render(){
        return(
            <div className="todo-container">
                <header>
                    Todo List
                </header>
                <AddTodo addTodo={this.addTodo} />
                <div className="todos-list">
                {
                    this.state.todos.map( todo => {
                        return <TodoItem deleteTodo={this.deleteTodo}key={todo._id} todo={todo} toggleCompletetodo={this.toggleCompleteTodo} />
                    })
                }
                </div>
            </div>
            
        )
    }
}