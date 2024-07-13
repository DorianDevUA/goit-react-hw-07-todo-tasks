import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { CheckBox, IconBtn, Title, Wrapper } from './Task.styled';

const Task = ({ task: { id, title, completed } }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted({ id }));
  const handleDelete = () => dispatch(deleteTask({ id }));

  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={completed} onChange={handleToggle} />
      <Title>{title}</Title>
      <IconBtn onClick={handleDelete}>
        {/* додати іконку видалити */}
        del
      </IconBtn>
    </Wrapper>
  );
};

export default Task;
