import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';
import { Section, Title, Wrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};

export default AppBar;
