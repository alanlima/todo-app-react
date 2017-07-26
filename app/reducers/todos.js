const initialState = [
    {id: 1, text: "Item 1", completed: false},
    {id: 2, text: "Item 2", completed: false},
    {id: 3, text: "Item 3", completed: true},
    {id: 4, text: "Item 4", completed: true}
]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log('adding...', action);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((item) => 
                (item.id == action.id)
                    ? Object.assign({}, item, {completed: !item.completed}) //{ ...item, completed: !item.completed } 
                    : item
            );
        case 'DELETE_TODO':
            Materialize.toast('Item removed.', 4000);

            return state.filter(item => item.id !== action.id);
        case 'CLEAR_COMPLETED':
            return state.filter(item => item.completed === false);
        default:
            return state;
    }
}

export default todos