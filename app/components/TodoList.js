import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
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

TodoList.propTypes = {
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

module.exports = TodoList