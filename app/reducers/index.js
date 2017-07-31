import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'
import notificator from './notificator'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    isLoading: loading,
    notification: notificator
})

module.exports = todoApp;