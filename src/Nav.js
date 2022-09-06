import { NavLink } from "react-router-dom";

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
