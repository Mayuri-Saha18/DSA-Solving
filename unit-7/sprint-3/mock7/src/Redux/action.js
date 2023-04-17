import { GET_TODOS, ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "./actionType";

const getTodo = () => ({
    type: GET_TODOS,
    payload: [
        { id: 1, value: "Todo1", status: false },
        { id: 2, value: "Todo2", status: false },
    ],
});

const addTodo = (todo) => ({
    type: ADD_TODOS, payload: todo
});



const updateTodo = (id, update) => ({
    type: UPDATE_TODOS,
    payload: {
        id,
        update,
    },
});

const deleteTodo = (id) => ({
    type: DELETE_TODOS,
    payload: id
});

export { getTodo, addTodo, updateTodo, deleteTodo };