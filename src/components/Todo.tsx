import { FC } from "react";
import type { TodoType } from "../types/TodoType";

type Props = TodoType & {
  handleDelete: (id: number) => void;
};

export const Todo: FC<Props> = ({ id, title, handleDelete }) => {
  return (
    <li key={id}>
      {title}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};
