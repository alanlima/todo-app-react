import reducer from './todos'
import ActionTypes from '../actions/action-types'
import deepFreeze from 'deep-freeze'


describe('todo reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('should handle ADD_TODO', () => {
        const todo = { id: 0, text: 'Test', completed: false };

        const state = [];

        deepFreeze(state);

        expect(reducer(state, {
            type: ActionTypes.TodoAdded,
            todo
        }))
        .toEqual([todo])
    })

    it('should handle CHANGE_TODO', () => {

        const oldTodo = { id: 2, text: 'Abc', completed: false }
        const changed = { id: 2, text: 'Cba', completed: true }

        const state = [
            { id: 1, text: 'Test', completed: true },
            oldTodo
        ]

        deepFreeze(state);

        const expectedState = [
            { id: 1, text: 'Test', completed: true },
            changed            
        ]

        expect(reducer(state, {
            type: ActionTypes.TodoChanged,
            todo: changed
        }))
        .toEqual(expectedState)

    });

    it('should handle GET_TODOS', () => {
        const todos = [
            { id: 1, text: 'Test', completed: true },
            { id: 2, text: 'Test 2', completed: false },
        ]

        expect(reducer([], {
            type: ActionTypes.GetTodos,
            todos: todos
        }))
        .toEqual(todos)
    })

    it('should handle TODO_DELETED', () => {
        const state = [
            { id: 1, text: 'Test', completed: true },
            { id: 2, text: 'Test 2', completed: false },
        ]

        const expectedState = [
            { id: 1, text: 'Test', completed: true },
        ]

        deepFreeze(state);

        expect(reducer(state, {
            type: ActionTypes.TodoRemoved,
            id: 2
        }))
        .toEqual(expectedState)
    })

    it('should return the state when undefined type', () => {
        const state = [
            { id: 1, text: 'Test', completed: true },
            { id: 2, text: 'Test 2', completed: false },
        ]

        expect(reducer(state, {
            type: 'any type'
        }))
        .toEqual(state)
    })
})