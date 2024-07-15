import { useDispatch } from 'react-redux';
import { deleteTaskThunk, toggleCompletedTaskThunk } from 'redux/operations';
import { CheckBox, IconBtn, Title, Wrapper } from './Task.styled';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompletedTaskThunk(task));
  const handleDelete = () => dispatch(deleteTaskThunk(task.id));

  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Title>{task.title}</Title>
      <IconBtn onClick={handleDelete}>
        {/* додати іконку видалити */}
        del
      </IconBtn>
    </Wrapper>
  );
};

export default Task;
