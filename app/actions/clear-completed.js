import database from './database';

const clearCompleted = () => {
    return dispatch => {
        const todoRef = database.ref('/todos');
        const query = todoRef.orderByKey();
        query.once('value')
            .then(snap => {
                snap.forEach(child => {
                    if(child.val().completed) {
                        todoRef.child(child.key).remove();
                    }
                })
            })
    } 
}

module.exports = clearCompleted