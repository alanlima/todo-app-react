import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { 
    toggleTodo, 
    deleteTodo, 
    getTodos, 
    firebaseWatch, 
    editTodo 
} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'All':
            return todos;
        case 'Completed':
            return todos.filter((item) => item.completed === true);
        case 'Active':
            return todos.filter((item) => item.completed === false);
    }
}

const sortTodos = todos => todos.sort((a, b) => a.completed - b.completed || a.text.toUpperCase() > b.text.toUpperCase())

const mapStateToProps = state => {
    return {
        todos: sortTodos(getVisibleTodos(state.todos, state.visibilityFilter)),
        itemsLeft: state.todos.filter(item => item.completed === false).length
    }
}

const mapDispatchToProps = dispatch => {
    firebaseWatch.startWatch(dispatch);

    return {
        onGetTodos: () => {
            dispatch(getTodos())
        },
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        onDelete: id => {
            dispatch(deleteTodo(id))
        },
        onEdit: (id, newText) => {
            dispatch(editTodo(id, newText))
        }
    }
}

const VisibileTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

module.exports = VisibileTodoList