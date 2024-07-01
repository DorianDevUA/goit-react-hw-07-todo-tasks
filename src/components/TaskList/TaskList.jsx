import Task from '../Task';
import { ToDoItem, ToDoList } from './TaskList.styled';

const TaskList = ({ tasks }) => {
  return (
    <ToDoList>
      {tasks.map(task => (
        <ToDoItem key={task.id}>
          <Task task={task} />
        </ToDoItem>
      ))}
    </ToDoList>
  );
};

export default TaskList;
