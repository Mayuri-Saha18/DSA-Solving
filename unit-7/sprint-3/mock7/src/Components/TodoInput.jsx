import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChnge = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          id: Date.now(),
          value,
          status: false,
        })
      );
    }
    console.log(value)
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={value}
          onChange={handleChnge}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
