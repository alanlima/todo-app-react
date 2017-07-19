import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

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

module.exports = TodoFilter;