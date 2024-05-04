import { Typography } from "@mui/material";
import TodoHeader from "./Components/TodoHeader";
import TodoForm from "./Components/TodoForm";
import TodoBody from "./Components/TodoBody";
import TodoContext, { useTodo } from "./Context/TodoContext";

function App() {
  const { todos } = useTodo();

  return (
    <Typography component="div" sx={{}}>
      <Typography
        component="div"
        sx={{
          width: { lg: "700px", md: "100%", sm: "100%" },
          width: { lg: "700px", md: "100%", sm: "100%" },
          boxShadow: "1px 2px 3px white",

          p: "20px",
          mx: "auto",
        }}
      >
        <TodoHeader />
        <TodoForm />
      </Typography>
      <Typography
        id="scroll"
        component="div"
        sx={{
          width: { lg: "700px", md: "100%", sm: "100%" },
          maxWidth: { lg: "700px", md: "100%", sm: "100%" },
          boxShadow: "1px 2px 3px white",
          p: "20px",
          mx: "auto",
          height: "calc(100vh - 170px)",
          overflow: "auto",
          cursor: "pointer",
        }}
      >
        {todos?.map((todo) => (
          <TodoBody todo={todo} />
        ))}
      </Typography>
    </Typography>
  );
}

export default App;
