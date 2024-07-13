import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import TasksPage from 'pages/TasksPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
