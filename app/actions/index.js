import ActionTypes from './action-types'
import toggleTodo from './toggle-todo'
import loadingActions from './loading-actions'
import getTodos from './get-todos'
import firebaseWatch from './firebase-watch'
import editTodo from './edit-todo'
import deleteTodo from './delete-todo'
import clearCompleted from './clear-completed'
import addTodo from './add-todo'
import visibilityFilter from './visibility-filter'

module.exports = {
    toggleTodo,
    loadingActions,
    getTodos,
    firebaseWatch,
    editTodo,
    deleteTodo,
    clearCompleted,
    addTodo,
    visibilityFilter
}