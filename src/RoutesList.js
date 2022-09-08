import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyApp from "./CompanyApp";
import CompanyDetails from "./CompanyDetails";
import JobsApp from "./JobsApp";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

/**  RoutesList component
 *
 * List of all routes:
 * - home
 * - companies
 * - companies/:handle
 * - jobs
 *
 * App --> RoutesList
*/

function RoutesList({ loginUser,  }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyApp />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="/jobs" element={<JobsApp />} />
      <Route path="/signup" element={<SignUpForm setGlobalUser={loginUser} />} />
      <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
      <Route path="/profile" element={<Profile setGlobalUser={loginUser} />} />
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default RoutesList;