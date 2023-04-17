import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionType";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          console.log(res);
          alert("Login successfully.");
          navigate("/dashboard", { replace: true });
        } else {
          alert("Login Failed!");
        }
      });
    }
  };

  return (
    <>
      <Link to="/" className="link">Home</Link>
      <h1>Login</h1>
      <div className="signUP">
        <form>
          <label>Email:</label>
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Enter EmailID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="submit" onClick={loginHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
