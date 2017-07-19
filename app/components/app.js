import React, { Component } from 'react';
import TodoApp from 'components/todo-app';
import NavBar from 'materialize/NavBar';

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
            <div>
                <NavBar title="To Do App" />
                <div className="container">
                    {/* <h3>To Do List</h3> */}

                    <TodoApp todos={this.state.todos} />
                </div>
            </div>
        )
    }
}

module.exports = App;