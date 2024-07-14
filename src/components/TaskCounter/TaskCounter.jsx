import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/selectors';
import { Text } from './TaskCounter.styled';

const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
      <Text>All Tasks: {count.all}</Text>
    </div>
  );
};

export default TaskCounter;
