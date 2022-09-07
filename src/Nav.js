import { NavLink } from "react-router-dom";
import './Nav.css';

/**  Nav component
 *
 * Renders navbar will links to home, companies, and jobs
 *
 * App --> Nav
*/

function Nav() {
  return (
    <nav className="navbar bg-light">
      <ul className="nav d-flex">

        <li className="nav-item navbar-brand">
          <NavLink className="nav-link " to="/">Jobly</NavLink>
        </li>

        <li className="nav-item d-inline-flex p-2">
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
        </li>

        <li className="nav-item d-inline-flex p-2">
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;



