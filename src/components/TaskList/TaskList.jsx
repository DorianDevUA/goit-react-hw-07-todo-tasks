import { useSelector } from 'react-redux';
import Task from 'components/Task';
import { ToDoItem, ToDoList } from './TaskList.styled';
import { selectVisibleTasks } from 'redux/selectors';

const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

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
