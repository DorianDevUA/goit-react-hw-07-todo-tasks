import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/tasksSlice';
import { Text } from './TaskCounter.styled';

const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const taskCounter = tasks => {
    return tasks.reduce(
      (acc, task) => {
        if (task.completed) {
          acc.completed += 1;
        } else {
          acc.active += 1;
        }
        acc.all += 1;

        return acc;
      },

      { all: 0, active: 0, completed: 0 },
    );
  };

  const count = taskCounter(tasks);

  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
      <Text>All Tasks: {count.all}</Text>
    </div>
  );
};

export default TaskCounter;
