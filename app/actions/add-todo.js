import database from './database'

const addTodo = text => {
    return dispatch => {
        const todosRef = database.ref('/todos');
        const todo = {
            text,
            completed: false
        };
        todosRef.push(todo);
    }
}

module.exports = addTodo;