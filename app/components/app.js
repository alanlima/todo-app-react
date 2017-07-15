import React, { Component } from 'react';
import TodoList from 'components/todo-list';

class App extends Component
{
    constructor(props){
        super(props);
        this.state = { todos: [
            {id: 1, text: "Item 1", completed: false},
            {id: 2, text: "Item 2", completed: false},
            {id: 3, text: "Item 3", completed: true},
            {id: 4, text: "Item 4", completed: true}
        ] };
    }

    render(){
        return (
            <div className="container">
                <h1>To Do List</h1>

                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

module.exports = App;