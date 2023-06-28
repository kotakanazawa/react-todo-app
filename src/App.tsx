import { useState } from "react";
import { Todo } from "./components/Todo";
import { TodoType } from "./types/TodoType";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: "buy a coffee",
    },
    {
      id: 2,
      title: "go hit the gym",
    },
    {
      id: 3,
      title: "buy an apple",
    },
  ]);

  const todoElements = todos.map((todo) => (
    <Todo id={todo.id} title={todo.title} />
  ));

  return (
    <>
      <ul>{todoElements}</ul>
    </>
  );
}

export default App;
