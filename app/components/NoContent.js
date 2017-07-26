import React from 'react'
import PropTypes from 'prop-types'

const NoContent = (props) => {
    return (
        <strong>
            <center>Ohh noooooow. There are no items to display =(
                <br />
                {props.showAddNewItemLink === true && 
                    <a href='#' onClick={() => $('.tap-target').tapTarget('open')}>
                        Well, you can add a new item =)
                    </a>}
            </center>
        </strong>
    );
}

NoContent.propTypes = {
    showAddNewItemLink: PropTypes.bool.isRequired
}

NoContent.defaultProps = {
    showAddNewItemLink: true
}

module.exports = NoContent