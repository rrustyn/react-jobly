import { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import JobsList from './JobsList';
import Loader from '../common/Loader';

/**  JobApp component
 *
 * Renders JobsList component
 *
 * State:
 * - jobs
 *
 * RoutesList --> JobsApp --> JobsList
*/

function JobsApp() {
  const [jobs, setJobs] = useState({
    list: [],
    isLoading: true
  });

  /** Make API call when component mounts to fetch all jobs */
  useEffect(function getAllJobsOnMount() {

    async function getAllJobs() {
      const res = await JoblyApi.getJobs();
      setJobs({
        list: res,
        isLoading: false
      });
    }

    getAllJobs();
  }, []);

  /** Search function filter by job title */
  async function search(searchTerm) {
    const res = await JoblyApi.getJobs(searchTerm);
    setJobs({
      ...jobs,
      list: res,
    });
  };

  if (jobs.isLoading) return <Loader />;

  return (
    // TODO: check for no jobs
    <JobsList jobs={jobs.list} search={search} />
  );

}

export default JobsApp;