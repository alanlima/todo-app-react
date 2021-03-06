import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextModal extends Component {
    constructor(props){
        super(props);

        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.showModal === nextProps.showModal) return;

        nextProps.showModal 
            ? this.openModal() 
            : this.closeModal();
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleKeyPress(event){
        if(event.key === 'Enter') {
            this.addItem();
        }
    }

    addItem(){
        this.props.onNewItem(this.state.text);
        this.props.onClose();
    }

    closeModal(){
        $(this.modal).modal('close');
        this.setState({text: ''});
    }

    openModal(){
        $(this.modal).modal('open');
        setTimeout(() => this.input.focus(), 100);
    }

    render() {
        return (
            <div className="modal" ref={modal => this.modal = modal}>
                <div className="modal-content">
                    <h4>New Item</h4>
                    <input
                        id='text'
                        placeholder='to do item'
                        type='text'
                        autoComplete='off'
                        className="col s9"
                        ref={input => this.input = input}
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div className="modal-footer">
                    <a 
                        href="#!" 
                        onClick={this.addItem}
                        className="waves-effect waves-green btn-flat">
                        Add
                    </a>
                    <a 
                        href="#!" 
                        onClick={this.props.onClose}
                        className="waves-effect waves-green btn-flat">
                        Cancel
                    </a>
                </div>
            </div>
        );
    }
}

InputTextModal.propTypes = {
    onNewItem: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired
}

InputTextModal.defaultProps = {
    showModal: false
}

module.exports = InputTextModal;