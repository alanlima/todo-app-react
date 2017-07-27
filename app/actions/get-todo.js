import database from './database'
import ActionTypes from '../actions/action-types'

const getTodos = () => {
    return dispatch => {
        database
            .ref('/todos')
            .once('value')
            .then(snap => {
                const result = snap.val();
                const todos = Object.keys(result).map(k => {
                    return Object.assign({}, result[k], {id: k})
                });
                dispatch(getTodoFullfilledAction(todos));
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