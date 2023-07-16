import { FC } from "react";
import type { TodoType } from "../types/TodoType";
import { DeleteIcon } from '@chakra-ui/icons'
import { Text, ListItem, IconButton, Checkbox } from "@chakra-ui/react"

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
      <Checkbox
        isChecked={isDone}
        value={title}
        onChange={(e) => handleIsDone(id, e.target.checked)}
        mb='2'
      >
        <Text as='span' fontSize='lg'>{title}</Text>
        <IconButton
          aria-label='Delete todo'
          icon={<DeleteIcon />}
          fontSize='md'
          ml='2'
          onClick={() => handleDelete(id)}
        />
      </Checkbox>
    </ListItem >
  );
};
