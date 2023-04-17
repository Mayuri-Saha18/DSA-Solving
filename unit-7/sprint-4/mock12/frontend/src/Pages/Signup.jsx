import React, { useContext, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import { HomePage } from "./HomePage";

export const Signup = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { handleSignup } = useContext(Appcontext);

  return (
    <>
      <HomePage />
      <h1>Register Here.</h1>
      <div className="signUp">
        <form onSubmit={(e) => handleSignup(e, user)}>
          <label>Name :</label>
          <input
            className="name"
            name="name"
            type="text"
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
          <br />
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
          <input type="submit" className="submit" value={"Sign UP"} />
        </form>
      </div>
    </>
  );
};
