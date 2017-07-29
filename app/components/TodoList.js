import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoContent from './NoContent';

const TodoItem = (props) => {
    const { item } = props;
    return (
        <div className='todo-item'>
            <a 
                onClick={() => props.onTodoClick(item.id)}
                className={item.completed && 'done'}>

                <input
                    className='todo-checkbox'
                    type='checkbox' 
                    readOnly
                    checked={item.completed == true} />

                <label></label>
            </a>
            <label
                className='todo-text'
                onClick={() => item.completed === false ? props.onEdit(item.id) : null}>
                {item.text}
            </label>
            <span 
                className='delete-item' 
                onClick={() => props.onDelete(item.id)}>
                <i className='material-icons'>delete</i>
            </span>
        </div>
    )
}

const TodoItemEdit = (props) => {
    const { item } = props;

    let inputRef = null;

    const editCompleted = () => props.onEditCompleted(item.id, inputRef.value);

    return (
        <div className='todo-item-edit'>
            <input 
                type='text'
                defaultValue={item.text}
                autoFocus
                ref={input => inputRef = input}
                onKeyPress={(event) => {
                    if(event.key === 'Enter') {
                        editCompleted();
                    }
                }}
                onBlur={editCompleted}
                />

        </div>
    )
}

class TodoList extends Component {

    componentDidMount() {
        this.props.onGetTodos();

        this.state = {
            isEditing: false,
            editItemId: ''
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleEditCompleted = this.handleEditCompleted.bind(this);
    }

    handleEdit(id) {
        this.setState({
            isEditing: true,
            editItemId: id
        })
    }

    handleEditCompleted(id, newText) {
        console.log('edit completed', id, newText)
        this.props.onEdit(id, newText);
        this.setState({
            isEditing: false,
            editItemId: ''
        })
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
                                className='z-depth-1'>

                                {this.state.isEditing && this.state.editItemId === item.id 
                                    ? <TodoItemEdit item={item} onEditCompleted={this.handleEditCompleted} />
                                    : <TodoItem {...this.props} item={item} onEdit={this.handleEdit} />}

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