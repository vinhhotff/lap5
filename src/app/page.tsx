"use client";

import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Todo from "./components/Todo/todo";

export default function Home() {
  type TodoType = { id: string; name: string };
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodo,
    };
    setTodoList([...todoList, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <p>This is a todo app</p>
      <div>
        <TextField
          size="small"
          id="outlined-basic"
          label="Add Work"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <div>
        {todoList.map((todo) => (
          <Todo key={todo.id} id={todo.id} name={todo.name} onDelete={handleDeleteTodo} />
        ))}
      </div>
    </>
  );
}
