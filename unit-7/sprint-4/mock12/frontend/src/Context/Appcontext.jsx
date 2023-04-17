import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("authToken") || false
  );

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleSignup = (e,user) => {
    e.preventDefault();

    let { name, email, pass } = user;
    console.log(user);
    if (name && email && pass) {
      fetch("https://gold-vast-millipede.cyclic.app/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "User Register Successfully") {
            alert("User Register Successfully");
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please provide all fields");
    }
  };

  const handleLogin = (e, user) => {
    e.preventDefault();

    let { email, pass } = user;
    if (email && pass) {
      fetch("https://gold-vast-millipede.cyclic.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "Login Successfully") {
            localStorage.setItem("authToken", data.token);
            alert(data.msg);
            navigate("/");
          } else if (data.msg === "Wrong Credentials") {
            alert(data.msg);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Signup first");
      navigate("/signup");
    }
  };

  const data = { handleLogin, handleSignup };

  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export default AppcontextProvider;
