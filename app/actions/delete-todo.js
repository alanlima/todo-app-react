import todoApi from '../api/todo-api'

const deleteTodo = id => {
    return dispatch => {
        return todoApi.deleteTodo(id)
    }
}

module.exports = deleteTodo
