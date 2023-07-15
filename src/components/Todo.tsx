import { FC } from "react";
import type { TodoType } from "../types/TodoType";
import { ListItem } from "@chakra-ui/react"

type Props = TodoType & {
  handleDelete: (id: number) => void;
  handleIsDone: (id: number, checked: boolean) => void;
};

export const Todo: FC<Props> = ({
  id,
  title,
  isDone,
  handleDelete,
  handleIsDone,
}) => {
  return (
    <ListItem key={id}>
      <input
        value={title}
        type="checkbox"
        checked={isDone}
        onChange={(e) => handleIsDone(id, e.target.checked)}
      />
      {title}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </ListItem>
  );
};
