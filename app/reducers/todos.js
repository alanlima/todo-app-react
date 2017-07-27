import ActionTypes from '../actions/action-types'

const todos = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.TodoChanged:
            return state.map(t => t.id === action.todo.id ? action.todo : t);
        case ActionTypes.TodoAdded:
            return [
                ...state,
                action.todo
            ]
        case ActionTypes.GetTodos:
            return action.todos;
        case ActionTypes.TodoRemoved:
            Materialize.toast('Item removed.', 4000);
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
}

export default todos