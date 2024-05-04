import { Button, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodo } from "../Context/TodoContext";

const TodoBody = ({ todo }) => {
  const { todos, setTodos, toggleTodo, editTodo, deleteTodo, editable } =
    useTodo();
  const { id, todoMessage, completed, edit } = todo || {};
  const [editMessage, setEditMessage] = useState(todoMessage);

  const [toggle, setToggle] = useState(completed);

  return (
    <div>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          borderBottomColor: "#A6A5A6",
          pb: "10px",
          mb: "10px",
          gap: "30px",
        }}
      >
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Checkbox
            sx={{ color: "white" }}
            onChange={() => {
              setToggle((prv) => !toggle);
              toggleTodo(id);
            }}
            checked={toggle}
          />

          <input
            onChange={(e) => setEditMessage(e.target.value)}
            readOnly={!edit}
            type="text"
            style={{
              border: !edit ? "none " : "1px solid blue",
              outline: "none",
              fontSize: "22px",
              textShadow: "0 0 6px red",
              padding: "9px",
              display: "inline-block",
              textDecoration: completed && "line-through",
              boxShadow: edit && "3px 3px 4px gray",
              flex: 1,
            }}
            value={editMessage}
          />
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            gap: "10px",
          }}
        >
          {" "}
          <div>
            {!edit ? (
              <div
                onClick={() => {
                  if (completed) return;
                  editable(id);
                }}
              >
                {" "}
                <EditNoteIcon
                  style={{
                    fontSize: "29px",
                  }}
                />
              </div>
            ) : (
              <div>
                <Button
                  onClick={() => editTodo(id, editMessage)}
                  size="small"
                  variant="outlined"
                >
                  Submit
                </Button>
              </div>
            )}
          </div>
          <div onClick={() => deleteTodo(id)}>
            <DeleteIcon
              style={{
                fontSize: "29px",
              }}
            />
          </div>
        </Typography>
      </Typography>
    </div>
  );
};

export default TodoBody;
