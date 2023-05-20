import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';

export const Todo = ({ text, counter, onDelete, onUpdate, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    const newText = prompt('input text', text || '');

    newText && onUpdate(newText, id);
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>

        <EditButton type="button" onClick={handleUpdate}>
          Edit
        </EditButton>
      </TodoWrapper>
    </>
  );
};
