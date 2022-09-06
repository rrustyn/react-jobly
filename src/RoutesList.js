import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyApp from "./CompanyApp";
import CompanyDetails from "./CompanyDetails";
import JobsApp from "./JobsApp";

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

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyApp />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="/jobs" element={<JobsApp />} />
    </Routes>
  );
}

export default RoutesList;