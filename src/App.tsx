import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { Todo } from "./components/Todo";
import type { TodoType } from "./types/TodoType";
import { Container, Heading, Input, List, useToast } from "@chakra-ui/react"

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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;

    handleSubmit();
  };

  const toast = useToast()
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toast({
      title: 'Todo Deleted',
      status: 'success',
      duration: 1000,
    })
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
    <Container mt='5'>
      <Heading mb='3'>Todo App</Heading>
      <label>
        <Input
          ref={inputRef}
          name={todo.title}
          value={todo.title}
          placeholder="Press enter to add todo"
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          mb='3'
        />
      </label>
      <List>{todoElements}</List>
    </Container>
  );
};

export default App;
