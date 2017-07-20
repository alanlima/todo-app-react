import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTextModal from 'materialize/InputTextModal';

class AddButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <div className="tap-target" data-activates="newItemButton">
                    <div className="tap-target-content">
                        <h5>New Item Button</h5>
                        <p>Click here to add a new to do item.</p>
                    </div>
                </div>
                <div className='fixed-action-btn'>
                    <a id='newItemButton' className='btn-floating btn-large red' onClick={this.openModal}>
                        <i className='large material-icons'>add</i>
                    </a>
                </div>
                <InputTextModal 
                    showModal={this.state.showModal}
                    onNewItem={this.props.onNewItem}
                    onClose={this.closeModal} />
            </div>
        );
    }
}

AddButton.propTypes = {
    onNewItem: PropTypes.func.isRequired,
}

module.exports = AddButton;