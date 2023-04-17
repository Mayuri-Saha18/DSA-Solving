import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/action";

const TodoItems = ({ id, value, status, title }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onChange={() => dispatch(updateTodo(id, { status: !status }))}
      ></button>
      <div>
        <div>{title}</div>
        <div>{value}</div>
        <div>{status ? "Completed" : "Active"}</div>
      </div>
    </div>
  );
};

export default TodoItems;
