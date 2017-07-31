import ActionTypes from '../actions/action-types'

const visibilityFilter = (state = 'All', action) => {
    switch(action.type) {
        case ActionTypes.SetVisibilityFilter:
            return action.filter;
        default:
            return state;
    }
}

module.exports = visibilityFilter