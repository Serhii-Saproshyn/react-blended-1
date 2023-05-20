import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todoSlise';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = () => {
    const newText = prompt('input text', text || '');

    newText && dispatch(updateTodo({ text: newText, id }));
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
