import database from './database'

const toggleTodo = id => {
    return dispatch => {
        const todoRef = database.ref('/todos/' + id);
        todoRef.once('value').then(snap => {
            todoRef.update({completed: !snap.val().completed});
        })
    }
}

module.exports = toggleTodo;