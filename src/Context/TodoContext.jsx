import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContextProvider = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [todoMessage, setTodoMessage] = useState("");

  const addTodo = (todo) => {
    setTodos((prv) => [
      ...prv,
      {
        id: Date.now(),
        todoMessage: todo.todoMessage,
        completed: false,
        edit: false,
      },
    ]);
    setTodoMessage("");
  };
  const toggleTodo = (id) => {
    setTodos((prv) =>
      prv.map((prvTodo) =>
        prvTodo?.id === id
          ? { ...prvTodo, completed: !prvTodo?.completed }
          : prvTodo
      )
    );
  };

  const editTodo = (id, todo) => {
    setTodos((prv) =>
      prv.map((prvTodo) =>
        prvTodo?.id === id
          ? {
              ...prvTodo,
              id: Date.now(),
              todoMessage: todo,
              completed: false,
              edit: false,
            }
          : prvTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prv) => prv.filter((prvTodo) => prvTodo.id !== id));
  };

  const editable = (id) => {
    setTodos((prv) =>
      prv.map((prvTodo) =>
        prvTodo?.id === id ? { ...prvTodo, edit: true } : prvTodo
      )
    );
  };

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));

    if (getTodos && getTodos?.length > 0) {
      setTodos(getTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoInfo = {
    todos,
    addTodo,
    setTodos,
    toggleTodo,
    editTodo,
    deleteTodo,
    edit,
    setEdit,
    todoMessage,
    setTodoMessage,
    editable,
  };
  return (
    <TodoContextProvider.Provider value={todoInfo}>
      {children}
    </TodoContextProvider.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContextProvider);
};
export default TodoContext;
