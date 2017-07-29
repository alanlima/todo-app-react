import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddButton, TodoFilter, TodoFooter, TodoList } from './Components';
import FilterLink from '../containers/FilterLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import FooterContainer from '../containers/FooterContainer'
import AddTodoButton from '../containers/AddTodoButton'
import Loading from '../containers/LoadingContainer'

class TodoApp extends Component
{
    render() {
        return (
            <div>
                <Loading />

                <FilterLink />

                <VisibleTodoList />
                
                <FooterContainer />

                <AddTodoButton />
            </div>
        )
    }
}

module.exports = TodoApp;