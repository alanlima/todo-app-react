import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoContent from './NoContent';

class TodoList extends Component {

    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        if(this.props.todos.length === 0){
            return (
                <NoContent showAddNewItemLink={this.props.itemsLeft === 0} />
            )
        }

        return (
            <ul className='todo-list'>
                {this.props.todos.map((item) => {
                    return (<li 
                                key={item.id} 
                                className='todo-item z-depth-1'>

                                <a 
                                    className={item.completed && 'done'}
                                    onClick={() => this.props.onTodoClick(item.id)}>

                                    <input
                                        className='todo-checkbox'
                                        type='checkbox' 
                                        readOnly
                                        checked={item.completed == true} />

                                    <label>{item.text}</label>
                                </a>

                                <span 
                                    className='delete-item' 
                                    onClick={() => this.props.onDelete(item.id)}>
                                    <i className='material-icons'>delete</i>
                                </span>

                            </li>);
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

module.exports = TodoList