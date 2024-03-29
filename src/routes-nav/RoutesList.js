import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyApp from "../companies/CompanyApp";
import CompanyDetails from "../companies/CompanyDetails";
import JobsApp from "../jobs/JobsApp";
import SignUpForm from "../users/forms/SignUpForm";
import LoginForm from "../users/forms/LoginForm";
import Profile from "../users/forms/Profile";
import { useContext } from "react";
import userContext from "../userContext";

/**  RoutesList component
 *
 * List of all routes:
 * - home
 * 
 * if logged out:
 * - signup
 * - login
 * 
 * if logged in:
 * - companies
 * - companies/:handle
 * - profile
 * - jobs
 *
 * Props:
 * - loginUser: function passed down from App
 * - registerUser: function passed down from App
 *
 * App --> RoutesList
*/

function RoutesList({ loginUser, registerUser, updateUser }) {

  const { user } = useContext(userContext);
  console.log("the user is:" , user);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {(!user.userData
        ?
        <>
          <Route path="/signup" element={<SignUpForm registerUser={registerUser} />} />
          <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
        </>
        :
        <>
          <Route path="/companies" element={<CompanyApp />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobsApp />} />
          <Route path="/profile" element={<Profile updateUser={updateUser} />} />
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;