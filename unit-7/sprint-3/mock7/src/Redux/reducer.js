import { GET_TODOS, ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionType";

const initialState = {
    todos: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_TODOS: {
            return {
                ...state,
                todos: payload,
            }
        }

        case ADD_TODOS: {
            return {
                ...state,
                todos: [...state.todos, payload],
            }
        }

        case UPDATE_TODOS: {
            const updateTodos = state.todos.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload.update,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTodos,
            };
        }

        case DELETE_TODOS: {
            const newTodos = state.todos.filter((todo) => todo.id !== payload);
            return {
                ...state,
                todos: newTodos,
            }
        }

        default: {
            return state;
        }
    }
}


export default reducer;