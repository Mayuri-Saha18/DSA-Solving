import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import { HomePage } from "./HomePage";

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { handleLogin } = useContext(Appcontext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <HomePage />
      <h1>Login Here.</h1>
      <div className="signUp">
        <form onSubmit={(e) => handleLogin(e, user)}>
          <label>Email :</label>
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
          <br />
          <label>Password :</label>
          <input
            className="password"
            name="pass"
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" className="submit" value={"Login"} />
        </form>
      </div>
    </>
  );
};
