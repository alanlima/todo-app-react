import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    isLoading: loading
})

module.exports = todoApp;