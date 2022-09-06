import { NavLink } from "react-router-dom";

/**  Nav component
 *
 * Renders navbar will links to home, companies, and jobs
 *
 * App --> Nav
*/

function Nav() {
  return (
    <ul className="Nav">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </ul>
  );
}

export default Nav;
