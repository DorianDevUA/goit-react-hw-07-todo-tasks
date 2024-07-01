import { Field, StyledForm } from './TaskForm.styled';

const TaskForm = () => {
  return (
    <StyledForm>
      <Field type="search" name="search" placeholder="Enter task text..." />
      <button type="submit">Add Task</button>
    </StyledForm>
  );
};

export default TaskForm;
