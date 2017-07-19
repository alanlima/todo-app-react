import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddButton, TodoFilter, TodoFooter, TodoList } from './Components';

class TodoApp extends Component
{
    constructor(props){
        super(props);

        this.state = {
            todos: props.todos,
            filter: (item) => { return true; }
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }

    handleClick(id) {
        this.setState({
            todos: this.state.todos.map(function(item){
                    if(item.id === id) item.completed = !item.completed;
                    return item;})
                });
    }

    handleDelete(id) {
        this.setState({
            todos: this.state.todos.filter(function(item){
                    return item.id !== id;
                })});
        Materialize.toast('Item deleted.', 4000);
    }

    handleNewItem(text) {
       this.setState({
            todos: [
                ...this.state.todos,
                {id: this.state.todos.length + 1, text, completed: false}
            ]
        })
        Materialize.toast('New item added.', 4000);
    }

    handleFilter(filter){

        const filterPredicate = {
            'All': (item) => true,
            'Active': (item) => item.completed === false,
            'Completed': (item) => item.completed === true
        }

        this.setState({
            filter: filterPredicate[filter],
            selectedFilter: filter
        })

    }

    handleClearCompleted(){
        const itemsCompletedCount = this.state.todos.filter((item) => item.completed === false).length;
        this.setState({
            todos: this.state.todos.filter((item) => item.completed === false)
        })

        Materialize.toast(itemsCompletedCount + ' item' + (itemsCompletedCount > 1 ? 's' : '') + ' removed.', 4000);
    }

    render() {
        const filteredTodos = this.state.todos.filter(this.state.filter);
        const sortedTodos = filteredTodos.sort((a, b) => a.completed === true);
        const itemsLeft = this.state.todos.filter((t) => t.completed === false).length;

        return (
            <div>
                <TodoFilter
                    onFilter={this.handleFilter}
                    selectedFilter={this.state.selectedFilter}
                />
                
                <TodoList 
                    list={sortedTodos}
                    onClick={this.handleClick}
                    onDelete={this.handleDelete}  />

                <TodoFooter 
                    itemsLeft={itemsLeft}
                    enableClearCompleted={itemsLeft !== this.state.todos.length}
                    onClearCompleted={this.handleClearCompleted}
                    />

                <AddButton onNewItem={this.handleNewItem} />
            </div>
        )
    }
}

TodoApp.propTypes = {
    todos: PropTypes.array.isRequired
}

module.exports = TodoApp;