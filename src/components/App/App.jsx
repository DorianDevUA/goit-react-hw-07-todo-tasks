import Layout from '../Layout';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import tasks from '../../tasks.json';
import AppBar from '../AppBar';

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default App;
