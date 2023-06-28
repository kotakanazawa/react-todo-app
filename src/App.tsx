import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
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

  const todoElements = todos.map((todo) => <li key={todo.id}>{todo.title}</li>);

  return (
    <>
      <ul>{todoElements}</ul>
    </>
  );
}

export default App;
