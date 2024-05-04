import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodoContext from "./Context/TodoContext.jsx";
import "./Style/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </React.StrictMode>
);
