import database from './database'

const editTodo = (id, newText) => {
    return dispatch => {
        const todoRef = database.ref('/todos/' + id);
        todoRef.once('value').then(snap => {
            todoRef.update({ text: newText });
        })
    }
}

module.exports = editTodo