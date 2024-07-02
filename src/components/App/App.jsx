import Layout from '../Layout';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import AppBar from '../AppBar';

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default App;
