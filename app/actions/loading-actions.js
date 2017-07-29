import ActionTypes from './action-types'

module.exports = dispatch => {
    return {
        showLoading: () => { dispatch({ type: ActionTypes.ShowLoading }) },
        hideLoading: () => { dispatch({ type: ActionTypes.HideLoading }) }
    }
}