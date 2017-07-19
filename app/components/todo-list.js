import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AddButton from 'components/AddButton';

const TodoListItens = (props) => {
    return (
        <ul className='todo-list'>
            {props.list.map((item) => {
                return (<li 
                            key={item.id} 
                            className='todo-item z-depth-1'>

                            <a 
                                className={item.completed && 'done'}
                                onClick={() => props.onClick(item.id)}>

                                <input
                                    className='todo-checkbox'
                                    type='checkbox' 
                                    readOnly
                                    checked={item.completed == true} />

                                <label>{item.text}</label>
                            </a>

                            <span 
                                className='delete-item' 
                                onClick={() => props.onDelete(item.id)}>
                                <i className='material-icons'>delete</i>
                            </span>

                        </li>);
            })}
        </ul>
    );
}

TodoListItens.propTypes = {
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

const TodoFilter = (props) => {
   return (<ul className='todo-filter'>
                {['All', 'Active', 'Completed'].map(
                    (item) => 
                        <li 
                            key={item} 
                            className={classNames({
                                "btn": true,
                                "waves-effect": true,
                                "waves-light": true,
                                "disabled": props.selectedFilter === item
                            })}
                            onClick={() => props.onFilter(item)}>
                            {item}
                        </li>)}
            </ul>);
}

TodoFilter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string.isRequired
}

TodoFilter.defaultProps = {
    selectedFilter: 'All'
}

const TodoFooter = (props) => {
    const itemsLeft = props.itemsLeft;

    return (
        <div className='row'>
            <div className='col s8'>
                <span>{itemsLeft} item{itemsLeft > 1 && "s"} left</span>

                {props.enableClearCompleted && <a onClick={props.onClearCompleted} className='clear-completed'>Clear Completed</a>}
                
            </div>
        </div>
    )
}

TodoFooter.propTypes = {
    itemsLeft: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    enableClearCompleted: PropTypes.bool.isRequired
}

TodoFooter.defaultProps = {
    enableClearCompleted: false
}

class TodoList extends Component
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
    }

    handleNewItem(text) {
       this.setState({
            todos: [
                ...this.state.todos,
                {id: this.state.todos.length + 1, text, completed: false}
            ]
        })
    }

    handleFilter(filter){

        const filterPredicate = {
            'All': (item) => true,
            'Active': (item) => item.completed === false,
            'Completed': (item) => item.completed === true
        }

        this.setState({
            'filter': filterPredicate[filter],
            selectedFilter: filter
        })

    }

    handleClearCompleted(){
        this.setState({
            todos: this.state.todos.filter((item) => item.completed === false)
        })
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
                
                <TodoListItens 
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

module.exports = TodoList;