import { Button } from "@mui/material";
import React from "react";

interface TodoProps {
  id: string;
  name: string;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, name, onDelete }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h1>{name}</h1>
      <Button variant="contained" color="error" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </div>
  );
};

export default Todo;
