
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";

const Userlogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.get(
        "https://movie-server-2gd3.onrender.com/users"
      );
      const user = response.data.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (user) {
        alert("Login successful");
        navigate("/dashboard")
      } else {
        alert("Login failed");
      }
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
        Log In
      </Button>
    </Box>
  );
};

export default Userlogin;

