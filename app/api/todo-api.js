import database from './database'

const todosRef = '/todos'

const getAll = () => {
    return database
            .ref(todosRef)
            .once('value')
            .then(snap => {
                const result = snap.val();
                const todos = Object.keys(result).map(k => {
                    return Object.assign({}, result[k], {id: k})
                });
                return todos
            })
}

const deleteTodo = id => {
    return database.ref(todosRef + '/' + id).remove();
}

const add = (text) => {
    const todo = {
        text,
        completed: false
    };
    return database
            .ref(todosRef)
            .push(todo);
}

const update = (id, updateSet) => {
    const ref = database.ref(todoRef + '/' + id);
    ref.once('value').then(snap => {
        ref.update(Object.assign({}, updateSet));
    })
}

const toggleTodo = id => {
    const ref = database.ref(todosRef + '/' + id);
    ref.once('value').then(snap => {
        ref.update({completed: !snap.val().completed});
    })
}

const deleteCompleted = () => {
    const reference = database.ref(todosRef);
    const query = reference.orderByKey();
    query.once('value')
        .then(snap => {
            snap.forEach(child => {
                if(child.val().completed) {
                    reference.child(child.key).remove();
                }
            })
        })
}

module.exports = {
    getAll,
    deleteTodo,
    add,
    update,
    deleteCompleted,
    toggleTodo
}