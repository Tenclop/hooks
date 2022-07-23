import React, { useState, useEffect } from "react";
import AddNewToDo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Pay bills",
      id: 1,
    },
    {
      text: "Go for shopping",
      id: 2,
    },
    {
      text: "Feed the dog",
      id: 3,
    },
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    setTodos([...todos, { text: text, id: Math.random() }]);
  };

  useEffect(() => {
    console.log("use effect", todos);
  }, [todos]); //run when todos data changes

  useEffect(() => {
    console.log("use effect", count);
  }, [count]); //run when count data changes

  return (
    <div>
      <ul>
        {todos.map((todos) => {
          return <li key={todos.id}>{todos.text}</li>;
        })}
      </ul>
      <AddNewToDo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score {count}</button>
    </div>
  );
};

export default TodoList;
