import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const TodoForm = () => {
  const { addTodo, todos, edit, todoMessage, setTodoMessage } = useTodo();

  const handelSubmit = () => {
    addTodo({ todoMessage });
  };
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "40px",
        gap: "20px",
      }}
    >
      <TextField
        onChange={(e) => setTodoMessage(e.target.value)}
        value={todoMessage}
        id="standard-basic"
        placeholder="Write Todo"
        variant="outlined"
        sx={{
          width: "70%",
          fontSize: "20px ",
          bgcolor: "white",
          fontWeight: 700,
          border: "none",
          outline: "none",
        }}
      />
      <Typography
        component="div"
        sx={{
          width: "30%",
        }}
      >
        {" "}
        <Button
          onClick={handelSubmit}
          variant="contained"
          sx={{
            width: "100%",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          Add Todo
        </Button>
      </Typography>
    </Typography>
  );
};

export default TodoForm;
