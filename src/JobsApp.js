import { useState, useEffect } from 'react';
import JoblyApi from './api';
import JobsList from './JobsList';
import Loader from './Loader';

/**  JobApp component
 *
 * Renders JobsList component
 *
 * State:
 * - jobs
 *
 * App --> RoutesList --> JobsApp
*/

function JobsApp() {

  const [jobs, setJobs] = useState({
    jobsList: [],
    isLoading: true
  });

  /** Make API call when component mounts to fetch all jobs */

  useEffect(function getAllJobsOnMount() {

    async function getAllJobs() {
      const res = await JoblyApi.getJobs();
      setJobs({
        jobsList: res,
        isLoading: false
      });
    }

    getAllJobs();

  }, []);


  if (jobs.isLoading) return <Loader />;

  /** Search function, calls on searchJobs from JoblyApi to find jobs by title
   * from API
  */

  async function search(searchTerm) {

    const res = await JoblyApi.searchJobs(searchTerm);

    setJobs({
      ...jobs,
      jobsList: res,
    });

  }

  return (
    // check for no jobs
    <JobsList jobs={jobs.jobsList} search={search} />
  );

}

export default JobsApp;