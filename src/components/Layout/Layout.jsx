import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.list}>
          <li>
            <NavLink className={css.item} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.item} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
