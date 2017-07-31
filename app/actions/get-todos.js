import todoApi from '../api/todo-api'
import ActionTypes from '../actions/action-types'
import LoadingActions from './loading-actions'

const getTodos = () => {
    return dispatch => {
        LoadingActions(dispatch).showLoading();
        return todoApi
                .getAll()
                .then(todos => {
                    dispatch(getTodoFullfilledAction(todos));
                    LoadingActions(dispatch).hideLoading();
                })
    }
}

const getTodoFullfilledAction = todos => {
    return {
        type: ActionTypes.GetTodos,
        todos
    }
}

module.exports = getTodos