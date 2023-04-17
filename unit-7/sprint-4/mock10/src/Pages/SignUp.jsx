import React, { useReducer } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/AuthReducer/action";
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../Redux/AuthReducer/actionType";

function reducer(state, action) {
  // console.log(action)
  // console.log(state)
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  username: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();

    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        alert("Account created.");
        navigate("/login", { replace: true });
      } else if (r === REGISTER_FAILURE) {
        alert("Please enter credentials");
      }
    });
  };

  return (
    <>
      <Link to="/" className="link">Home</Link>
      <h1>Register Here</h1>
      <div className="signUP">
        <form>
          <label>Name:</label>
          <input
            className="name"
            name="name"
            type="text"
            placeholder="Enter Full Name"
            value={state.name}
            onChange={(e) => setter({ type: "name", payload: e.target.value })}
          />
          <br />
          <label>Email:</label>
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Enter EmailID"
            value={state.email}
            onChange={(e) => setter({ type: "email", payload: e.target.value })}
          />
          <br />
          <label>Password:</label>
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={state.password}
            onChange={(e) =>
              setter({ type: "password", payload: e.target.value })
            }
          />
          <br />
          <button className="submit" onClick={signupHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
