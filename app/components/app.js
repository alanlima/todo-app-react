import React, { Component } from 'react';
import TodoApp from 'components/TodoApp';
import NavBar from 'materialize/NavBar';

class App extends Component
{
    render(){
        return (
            <div>
                <NavBar title="To Do App" />
                <div className="container">
                    <TodoApp />
                </div>
            </div>
        )
    }
}

module.exports = App;