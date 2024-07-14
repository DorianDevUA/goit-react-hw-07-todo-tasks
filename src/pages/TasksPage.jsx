import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTasks } from 'redux/operations';
import TaskList from 'components/TaskList';
import AppBar from 'components/AppBar';
import TaskForm from 'components/TaskForm';

const TasksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
};

export default TasksPage;
