import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTextModal from 'materialize/InputTextModal';

class AddButton extends Component {

    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.modal.openModal();
    }

    render() {
        return (
            <div>
                <div className='fixed-action-btn'>
                    <a className='btn-floating red' onClick={this.openModal}>
                        <i className='large material-icons'>add</i>
                    </a>
                </div>
                <InputTextModal 
                    ref={m => this.modal = m}
                    onNewItem={this.props.onNewItem} />
            </div>
        );
    }
}

AddButton.propTypes = {
    onNewItem: PropTypes.func.isRequired,
}

module.exports = AddButton;