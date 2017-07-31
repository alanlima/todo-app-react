import ActionTypes from '../actions/action-types'

module.exports = (state = { hasNotification: false }, action) => {
    switch(action.type) {
        case ActionTypes.NotificationReceived:
            return {
                hasNotification: true,
                notificationType: action.notificationType,
                text: action.text
            }
        default:
            return { hasNotification: false };
    }
}