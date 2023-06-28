import { FC } from "react";
import { TodoType } from "../types/TodoType";

export const Todo: FC<TodoType> = ({ id, title }) => {
  return <li key={id}>{title}</li>;
};
