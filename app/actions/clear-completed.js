import todoApi from '../api/todo-api';

const clearCompleted = () => {
    return dispatch => {
        return todoApi.deleteCompleted()
    } 
}

module.exports = clearCompleted