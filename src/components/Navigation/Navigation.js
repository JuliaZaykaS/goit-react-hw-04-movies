import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.Navigation}>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
}
