// "use client";

// import { useEffect, useState } from "react";
// import { TextField, Button } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
// import Todo from "./components/todo";

// export default function Home() {
//   type Todo = { id: string; name: string };
//   const [mounted, setMounted] = useState(false);
//   const [todoList, setTodoList] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleAddTodo = () => {
//     if (!newTodo.trim()) return; // Prevent adding empty todos
//     const newTodoItem: Todo = {
//       id: uuidv4(),
//       name: newTodo,
//     };
//     setTodoList([...todoList, newTodoItem]);
//     setNewTodo("");
//   };

//   const handleDeleteTodo = (id: string) => {
//     setTodoList(todoList.filter((todo) => todo.id !== id));
//   };

//   if (!mounted) return null; // Avoid hydration errors

//   return (
//     <>
//       <p>This is a todo app</p>
//       <div>
//         <TextField
//           size="small"
//           id="outlined-basic"
//           label="Add Work"
//           variant="outlined"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <Button variant="contained" onClick={handleAddTodo}>
//           Add
//         </Button>
//       </div>
//       <div>
//         {todoList.map((todo) => (
//           <Todo key={todo.id} name={todo.name} />
//         ))}
//       </div>
//     </>
//   );
// }
import React from 'react'
import UseEffect from './components/UseEffect/UseEffect'

const page = () => {
  return (
    <div>
        <UseEffect></UseEffect>
    </div>
  )
}

export default page
