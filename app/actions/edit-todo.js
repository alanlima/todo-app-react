import todoApi from '../api/todo-api'

const editTodo = (id, newText) => {
    return dispatch => {
        todoApi.update(id, { text: newText });
    }
}

module.exports = editTodo