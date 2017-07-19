import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className='row col s12'>
                    <a href="#" className="brand-logo">{props.title}</a>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: ''
}

module.exports = NavBar;