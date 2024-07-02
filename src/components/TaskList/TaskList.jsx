import { useSelector } from 'react-redux';
import Task from '../Task';
import { ToDoItem, ToDoList } from './TaskList.styled';
import { getTasks } from '../../redux/tasks/selectors';
import { getStatusFilter } from '../../redux/filters/selectors';
import { statusFilters } from '../../redux/filters/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ToDoList>
      {visibleTasks.map(task => (
        <ToDoItem key={task.id}>
          <Task task={task} />
        </ToDoItem>
      ))}
    </ToDoList>
  );
};

export default TaskList;
