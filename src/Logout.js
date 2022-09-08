import { Navigate } from "react-router-dom";
/** Logout component
 *
 */
function Logout({ logout }) {

  logout();
  return (
    <Navigate to="/" />
  );
}

export default Logout;