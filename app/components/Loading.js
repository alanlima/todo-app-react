import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        "height": "25px"
    },
    visible: {
        display: "block"
    },
    hidden: {
        display: 'none'
    }
}

class Loading extends Component {
    render() {
        return (
            <div style={styles.content}>
                <div className='progress' style={this.props.isVisible ? styles.visible : styles.hidden}>
                    <div className='indeterminate'></div>
                </div>
            </div>
        )
    }
}

Loading.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

Loading.defaultProps = {
    isVisible: false
}

module.exports = Loading