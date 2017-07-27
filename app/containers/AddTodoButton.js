import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import addTodo from '../actions/add-todo';

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

export default AddTodoButton