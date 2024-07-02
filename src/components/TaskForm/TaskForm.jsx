import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import { Field, StyledForm } from './TaskForm.styled';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    console.log(form.elements.text.value);
    dispatch(addTask(form.elements.text.value));

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
