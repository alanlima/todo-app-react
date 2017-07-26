import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddButton from '../components/AddButton'

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewItem: text => {
            dispatch(addTodo(text))
        }
    }
}

const AddTodoButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton)

export default AddTodoButton