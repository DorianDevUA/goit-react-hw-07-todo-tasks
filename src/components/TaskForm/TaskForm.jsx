import { useDispatch } from 'react-redux';
import { addTaskThunk } from 'redux/operations';
import { Field, StyledForm } from './TaskForm.styled';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const title = form.elements.text.value;

    dispatch(addTaskThunk(title));
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
