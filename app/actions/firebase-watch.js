import database from '../api/database'
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

const sendNotification = (type, text) => {
    return { 
        type: ActionTypes.NotificationReceived,
        notificationType: type,
        text
    }
}

module.exports = {
    startWatch: dispatch => {
        const todosRef = database.ref('/todos');
        todosRef.on('child_changed', (childSnapshot, prevChildKey) => {
            const todo = Object.assign({}, childSnapshot.val(), {id: childSnapshot.key});
            dispatch(todoChangedAction(todo));
            dispatch(sendNotification('TODO_UPDATED', '1 todo was updated'))
        })

        todosRef.limitToLast(10).on('child_added', (childSnapshot, prevChildKey) => {
            const todo = Object.assign({}, childSnapshot.val(), {id: childSnapshot.key});
            dispatch(todoAddedAction(todo));
            dispatch(sendNotification('TODO_ADDED', '1 todo was added'))
        })

        todosRef.on('child_removed', oldChildSnapshot => {
            dispatch(todoRemovedAction(oldChildSnapshot.key));
            dispatch(sendNotification('TODO_DELETED', '1 todo was deleted'))
        })
    },
    stopWatch: () => {
        const todosRef = database.ref('/todos');
        todosRef.off('child_changed');
        todosRef.off('child_added');
        todosRef.off('child_removed');
    }
}