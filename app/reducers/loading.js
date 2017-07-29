import ActionTypes from '../actions/action-types'

module.exports = (state = false, action) => {
    switch(action.type){
        case ActionTypes.ShowLoading:
        return true;
        case ActionTypes.HideLoading:
        return false;
    }
    return state;
}