import ActionTypes from './action-types'

const setVisibilityFilter = (filter) => {
    return {
        type: ActionTypes.SetVisibilityFilter,
        filter
    }
}

module.exports = setVisibilityFilter