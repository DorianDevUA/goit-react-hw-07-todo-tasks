import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="tasks">ToDo&apos;s</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
