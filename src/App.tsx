import { useState, ChangeEvent } from "react";
import { Todo } from "./components/Todo";
import type { TodoType } from "./types/TodoType";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState<TodoType>({
    id: 0,
    title: "",
    isDone: false,
  });

  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: "buy a coffee",
      isDone: true,
    },
    {
      id: 2,
      title: "go hit the gym",
      isDone: false,
    },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo((prevTodo) => ({
      ...prevTodo,
      title: value,
    }));
  };

  const handleSubmit = () => {
    if (!todo.title) return;

    const newTodo: TodoType = {
      id: todos.length + 1,
      title: todo.title,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo((prevTodo) => ({
      ...prevTodo,
      title: "",
    }));
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleIsDone = (id: number, checked: boolean) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === id) {
          return { ...prevTodo, isDone: checked };
        }

        return prevTodo;
      });

      return newTodos;
    });
  };

  const todoElements = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isDone={todo.isDone}
      handleDelete={handleDelete}
      handleIsDone={handleIsDone}
    />
  ));

  return (
    <>
      <h2>Todo App</h2>
      <label>
        Your todo here:
        <input
          name={todo.title}
          value={todo.title}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
      <ul>{todoElements}</ul>
    </>
  );
};

export default App;
