import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyApp from "./CompanyApp";
import CompanyDetails from "./CompanyDetails";
import JobsApp from "./JobsApp";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import { useContext } from "react";
import userContext from "./userContext";
import Logout from "./Logout";

/**  RoutesList component
 *
 * List of all routes:
 * - home
 * - companies
 * - companies/:handle
 * - jobs
 *
 * Props:
 * - loginUser
 * - registerUser
 * - user
 *
 * App --> RoutesList
*/

function RoutesList({ loginUser, registerUser, logout }) {

  const { user } = useContext(userContext);
  console.log(user);
  return (
    <Routes>

      {(!user ?
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpForm registerUser={registerUser} />} />
          <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </> :
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyApp />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobsApp />} />
          <Route path="/profile" element={<Profile setGlobalUser={loginUser} />} />
          <Route path="/logout" element={<Logout logout={logout} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}


    </Routes>
  );
}

export default RoutesList;