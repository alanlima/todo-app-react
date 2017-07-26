import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    // console.log('getVisibleTodos', todos, filter)
    switch(filter){
        case 'All':
            return todos;
        case 'Completed':
            return todos.filter((item) => item.completed === true);
        case 'Active':
            return todos.filter((item) => item.completed === false);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        itemsLeft: state.todos.filter(item => item.completed === false).length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        onDelete: id => {
            dispatch(deleteTodo(id))
        }
    }
}

const VisibileTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibileTodoList