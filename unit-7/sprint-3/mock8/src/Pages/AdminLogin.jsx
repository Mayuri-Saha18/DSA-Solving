import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const AdminLogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const adminLoginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ userEmail, userPassword }));
  };

  if(isAuth){
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <h1>AdminLogin</h1>
      <div>
        <form onSubmit={adminLoginHandler}>
          <div>
            <label>Admin Email: </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Admin Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
