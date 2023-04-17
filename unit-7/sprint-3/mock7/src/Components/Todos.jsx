import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo, updateTodo } from "../Redux/action";
import store from "../Redux/store";
import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

const Todos = () => {
  const todos = useSelector((store) => store.todos);
  console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const todoDelete=(id)=>{
    dispatch(deleteTodo(id));
    dispatch(getTodo());
  }


  return (
    <div>
      <h1>Todos</h1>
      {/* <TodoInput /> */}


      {todos.map((el,id,status)=>{
        return(
          <div>
            <div>{el.value}</div>
            <button onChange={() => dispatch(updateTodo(id, { status: !status }))}>{el.status ? "Complete":"Incomplete"}</button>
            <button onClick={()=>todoDelete(el.id)}>Delete</button>
          </div>
        )
      })}

    </div>
  )
}

export default Todos;
