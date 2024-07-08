import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import { Field, StyledForm } from './TaskForm.styled';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const taskTitle = form.elements.text.value;

    dispatch(addTask({ taskTitle }));
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add Task</button>
    </StyledForm>
  );
};

export default TaskForm;
