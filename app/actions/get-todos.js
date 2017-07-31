import database from './database'
import ActionTypes from '../actions/action-types'
import LoadingActions from './loading-actions'

const getTodos = () => {
    return dispatch => {
        LoadingActions(dispatch).showLoading();
        database
            .ref('/todos')
            .once('value')
            .then(snap => {
                const result = snap.val();
                const todos = Object.keys(result).map(k => {
                    return Object.assign({}, result[k], {id: k})
                });
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