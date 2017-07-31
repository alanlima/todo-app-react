import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { addTodo } from '../actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewItem: text => {
            dispatch(addTodo(text));
        }
    }
}

const AddTodoButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton)

module.exports = AddTodoButton