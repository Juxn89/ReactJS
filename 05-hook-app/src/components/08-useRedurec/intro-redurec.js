const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar')
        return [...state, action.payload]
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 1,
    todo: 'Comprar leche',
    done: false
};

const agregarTodoAcction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAcction);

console.table(todos);