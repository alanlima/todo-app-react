import ActionTypes from './action-types'

export const setVisibilityFilter = (filter) => {
    return {
        type: ActionTypes.SetVisibilityFilter,
        filter
    }
}