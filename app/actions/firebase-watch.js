import database from './database'
import ActionTypes from './action-types'

const todoChangedAction = todo => {
    return { type: ActionTypes.TodoChanged, todo };
}

const todoAddedAction = todo => {
    return { type: ActionTypes.TodoAdded, todo };
}

const todoRemovedAction = id => {
    return { type: ActionTypes.TodoRemoved, id };
}

module.exports = {
    startWatch: dispatch => {
        const todosRef = database.ref('/todos');
        todosRef.on('child_changed', (childSnapshot, prevChildKey) => {
            const todo = Object.assign({}, childSnapshot.val(), {id: childSnapshot.key});
            dispatch(todoChangedAction(todo));
        })

        todosRef.limitToLast(10).on('child_added', (childSnapshot, prevChildKey) => {
            const todo = Object.assign({}, childSnapshot.val(), {id: childSnapshot.key});
            dispatch(todoAddedAction(todo));
        })

        todosRef.on('child_removed', oldChildSnapshot => {
            dispatch(todoRemovedAction(oldChildSnapshot.key));
        })
    },
    stopWatch: () => {
        const todosRef = database.ref('/todos');
        todosRef.off('child_changed');
        todosRef.off('child_added');
        todosRef.off('child_removed');
    }
}