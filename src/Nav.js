import { NavLink, Link } from "react-router-dom";
import './Nav.css';
import { useContext } from 'react';
import userContext from './userContext';


/**  Nav component
 *
 * Renders navbar with links to home, and either:
 * companies, jobs, profile and logout, or signup and login
 *
 * Prop:
 * - logout: function from app that logs out user
 *
 * App --> Nav
*/

function Nav({ logout }) {

  const { user } = useContext(userContext);

  return (
    <nav className="navbar bg-light">
      <ul className="nav d-flex">

        <li className="nav-item navbar-brand">
          <NavLink className="nav-link " to="/">Jobly</NavLink>
        </li>
        
        {user.userData
          ? <>
            <li className="nav-item d-inline-flex p-2">
              <NavLink className="nav-link" to="/companies">Companies</NavLink>
            </li>

            <li className="nav-item d-inline-flex p-2">
              <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            </li>

            <li className="nav-item d-inline-flex p-2">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>

            <li className="nav-item d-inline-flex p-2">
              <Link className="nav-link" onClick={logout} to="/">
                Logout {user.userData.username}
              </Link>
            </li>
          </>
          : <>
            <li className="nav-item d-inline-flex p-2">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>

            <li className="nav-item d-inline-flex p-2">
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
          </>
        }
        
      </ul>
    </nav>
  );
}

export default Nav;



