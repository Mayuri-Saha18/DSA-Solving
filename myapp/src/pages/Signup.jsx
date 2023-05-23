
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://movie-server-2gd3.onrender.com/users",
        formData
      );
      console.log(response.data);
      navigate("/userlog");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField
        name="username"
        label="Username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
