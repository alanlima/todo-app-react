import React from 'react';
import PropTypes from 'prop-types';

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
    enableClearCompleted: false,
    itemsLeft: 0
}

module.exports = TodoFooter;