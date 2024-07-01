import { CheckBox, IconBtn, Title, Wrapper } from './Task.styled';

const Task = ({ task: { title, completed } }) => {
  const handleChange = () => {};

  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={completed} onChange={handleChange} />
      <Title>{title}</Title>
      <IconBtn>
        {/* додати іконку видалити */}
        del
      </IconBtn>
    </Wrapper>
  );
};

export default Task;
