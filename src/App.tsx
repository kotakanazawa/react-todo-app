import { useState, ChangeEvent } from "react";
import { Todo } from "./components/Todo";
import type { TodoType } from "./types/TodoType";
import "./App.css";

const App = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
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
    setTodoTitle(value);
  };

  const handleSubmit = () => {
    const newTodo: TodoType = {
      id: todos.length + 1,
      title: todoTitle,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoTitle("");
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const todoElements = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isDone={todo.isDone}
      handleDelete={handleDelete}
    />
  ));

  return (
    <>
      <h2>Todo App</h2>
      <label>
        Your todo here:
        <input
          name={todoTitle}
          value={todoTitle}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
      <ul>{todoElements}</ul>
    </>
  );
};

export default App;
