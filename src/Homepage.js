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
      {user.userData
        ? <h1>Welcome back, {user.userData.username}</h1>
        : <h1>Welcome to Jobly</h1>
      }
    </>
  );
}

export default Homepage;