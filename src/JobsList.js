import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

/**  JobsList component
 *
 * List of all jobs received from API
 *
 * Props:
 * - jobs
 * - search
 *
 * App --> RoutesList --> JobApp --> JobsList
*/

function JobsList({ jobs, search }) {

  return (
    <>
      <SearchForm search={search} />
      <p>Eventually JobsList</p>
      {/* companies.jobs.map(job => <JobCard job={job}/>) */}
    </>
  );
}

export default JobsList;