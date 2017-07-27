import database from './database'

const deleteTodo = id => {
    return dispatch => {
        database.ref('/todos/' + id).remove();
    }
}

module.exports = deleteTodo
