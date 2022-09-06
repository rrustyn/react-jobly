import { useState } from 'react';

/**  JobApp component
 *
 * Renders JobsList component
 *
 * States:
 * - jobs
 *
 * App --> RoutesList --> JobApp
*/

function JobsApp() {

  const [jobs, setJobs] = useState(null);

  //function search()

  return <p>Eventually JobsList</p>;
  //<JobsList jobs={jobs} search={search}/>
}

export default JobsApp;