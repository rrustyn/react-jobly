import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

/**  JobsList component
 *
 * List of all jobs received from API
 *
 * Props:
 * - jobs: array of job objects
 * - search: callback function to search against jobs
 *
 * JobApp --> JobsList --> JobCard
*/

function JobsList({ jobs, search }) {

  return (
    <>
      <SearchForm search={search} />
      {jobs.length > 0
        ? jobs.map(job =>
          <JobCard key={job.id} job={job} />)
          
        : <p>Sorry, no results matching criteria</p>
        }
    </>
  );
}

export default JobsList;