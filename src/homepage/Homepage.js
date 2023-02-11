import userContext from "../userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

/**  Homepage component
 *
 * Renders jobly home landing page
 *
 * App --> RoutesList --> Homepage
*/

function Homepage() {

  const { user } = useContext(userContext);


  const displayLogin = (
    <div className="buttons mb-4">
      <Link className="btn btn-primary mx-1" to="/login">
        Log in
      </Link>
      <Link className="btn btn-primary mx-1" to="/signup">
        Sign up
      </Link>
    </div>
  );


  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mt-4 mb-1 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        { user.userData
        ? <p>Welcome back, ${user.firstName | user.username}</p>
        : displayLogin 
        }
      </div>
    </div>
  );
}

export default Homepage;