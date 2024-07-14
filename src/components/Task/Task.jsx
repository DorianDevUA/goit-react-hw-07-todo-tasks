import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompletedTask } from 'redux/operations';
import { CheckBox, IconBtn, Title, Wrapper } from './Task.styled';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompletedTask(task));
  const handleDelete = () => dispatch(deleteTask(task.id));

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
