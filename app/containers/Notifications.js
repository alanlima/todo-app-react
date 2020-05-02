import React from 'react'
import { connect } from 'react-redux'

module.exports = connect(state => {
    if(state.notification.hasNotification) {
        Materialize.toast(state.notification.text, 4000);
    }
    return { }
}, undefined)(() => <span></span>)