import userContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

/**  Homepage component
 *
 * Renders jobly home landing page
 *
 * App --> RoutesList --> Homepage
*/

function Homepage() {

  const { user } = useContext(userContext);

  return (
    <>
      <div className="container h-50 
                      align-items-center 
                      justify-content-center">
        <h1 className="mb-4 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {user.userData
          ? <h2>
            Welcome Back, {user.userData.firstName || user.userData.username}!
          </h2>
          : (
            <p>
              <Link className="btn btn-primary fw-bold me-3"
                to="/login">
                Log in
              </Link>
              <Link className="btn btn-primary fw-bold"
                to="/signup">
                Sign up
              </Link>
            </p>
          )}
      </div>
    </>
  );
}

export default Homepage;