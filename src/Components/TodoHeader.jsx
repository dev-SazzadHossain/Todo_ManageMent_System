import { Typography } from "@mui/material";
import React from "react";

const TodoHeader = () => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          fontSize: "26px",
          fontWeight: 700,
          textShadow: "0 0 8px rgba(244, 43, 119)",
          textAlign: "center",
        }}
      >
        Todo Management System
      </Typography>
    </div>
  );
};

export default TodoHeader;
