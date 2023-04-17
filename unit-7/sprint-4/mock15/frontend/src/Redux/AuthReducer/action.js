import axios from "axios";
import * as types from "./actionType"

const register = (payload) => (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
    console.log(payload);
    return axios
        // .post("http://localhost:4500/users/signup", payload)
        .post("https://calm-lime-grasshopper-gear.cyclic.app/users/signup", payload)
        .then((r) => {
            dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
            return types.REGISTER_SUCCESS;
        })
        .catch((e) => {
            dispatch({ type: types.REGISTER_FAILURE, payload: e });
            return types.REGISTER_FAILURE;
        });
};

const login = (params) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios
        // .post("http://localhost:4500/users/signup", params)
        .post("https://calm-lime-grasshopper-gear.cyclic.app/users/signup", params)
        .then((r) => {
            dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
            console.log(r.data)
            return types.LOGIN_SUCCESS;
        })
        .catch((e) => {
            dispatch({ type: types.LOGIN_FAILURE, payload: e });
            return types.LOGIN_FAILURE;
        });
};

export { register, login };