import todoApi from '../api/todo-api'

const addTodo = text => {
    return dispatch => {
        return todoApi.add(text);
    }
}

module.exports = addTodo;