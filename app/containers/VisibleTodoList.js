import { connect } from 'react-redux'
import deleteTodo from '../actions/delete-todo'
import getTodos from '../actions/get-todo'
import TodoList from '../components/TodoList'
import toggleTodo from '../actions/toggle-todo'
import firebaseWatch from '../actions/firebase-watch'

const getVisibleTodos = (todos, filter) => {
    // console.log('getVisibleTodos', todos, filter)
    switch(filter){
        case 'All':
            return todos.sort((a, b) => a.completed);
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
    firebaseWatch.startWatch(dispatch);

    return {
        onGetTodos: () => {
            dispatch(getTodos());
        },
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