import userContext from "./userContext";
import { useContext } from "react";

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
      {user
        ? <h1>Welcome back, {user.username}</h1>
        : <h1>Welcome to Jobly</h1>
      }
    </>
  );
}

export default Homepage;