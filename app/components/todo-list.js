import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TodoListItens = (props) => {
    return (
        <ul>
            {props.list.map((item) => {
                return (<li 
                            key={item.id} 
                            className='todo-item'>

                            <a 
                                className={item.completed && 'done'}
                                onClick={() => props.onClick(item.id)}>

                                <input
                                    className='todo-checkbox'
                                    type='checkbox' 
                                    readOnly
                                    checked={item.completed == true} />

                                {item.text}
                            </a>

                            <span 
                                className='delete-item' 
                                onClick={() => props.onDelete(item.id)}>
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

class TodoInput extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.text);

        this.setState({
            text: ''
        });
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <form className='column'>
                <label className='header' htmlFor='text'>
                    {this.props.label}
                </label>
                <input
                    id='text'
                    placeholder='to do item'
                    type='text'
                    autoComplete='off'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.text}
                    onClick={this.handleSubmit}>
                    Add
                </button>
            </form>
        );
    }
}

TodoInput.propTypes = {
    text: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
}

const TodoFooter = (props) => {
    const itemsLeft = props.itemsLeft;

    return (
        <div className='todo-footer'>
            <span>{itemsLeft} item{itemsLeft > 1 && "s"} left</span>

            <ul className='todo-filter'>
                {['All', 'Active', 'Completed'].map(
                    (item) => 
                        <li 
                            key={item} 
                            style={{fontWeight: props.selectedFilter === item && 'bold'}}
                            onClick={() => props.onFilter(item)}>
                            {item}
                        </li>)}
            </ul>

            {props.enableClearCompleted && <a onClick={props.onClearCompleted}>Clear Completed</a>}
        </div>
    )
}

TodoFooter.propTypes = {
    itemsLeft: PropTypes.number.isRequired,
    onFilter: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    enableClearCompleted: PropTypes.bool.isRequired
}

TodoFooter.defaultProps = {
    selectedFilter: 'All',
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
        this.handleFooterFilter = this.handleFooterFilter.bind(this);
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
        let todosCopy = this.state.todos.slice();
        todosCopy.push({id: todosCopy.length + 1, text, completed: false});
        this.setState({
            todos: todosCopy
        })
    }

    handleFooterFilter(filter){

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
                <TodoInput 
                    onSubmit={this.handleNewItem} />
 
                <h2> To Do </h2>
                
                <TodoListItens 
                    list={sortedTodos}
                    onClick={this.handleClick}
                    onDelete={this.handleDelete}  />

                <TodoFooter 
                    itemsLeft={itemsLeft}
                    enableClearCompleted={itemsLeft !== this.state.todos.length}
                    onFilter={this.handleFooterFilter}
                    selectedFilter={this.state.selectedFilter}
                    onClearCompleted={this.handleClearCompleted}
                    />
            </div>
        )
    }
}

module.exports = TodoList;