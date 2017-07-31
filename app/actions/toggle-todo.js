import todoApi from '../api/todo-api'

const toggleTodo = id => {
    return dispatch => {
        return todoApi.toggleTodo(id)
    }
}

module.exports = toggleTodo;