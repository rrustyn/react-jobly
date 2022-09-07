
/**  JobCard component
 *
 * Individual job card displaying information of jobs:
 *  - title
 *  - companyName (optional, if from companiesList: null)
 *  - salary
 *  - equity
 *
 * Props:
 * - job
 *
 * { JobsList, CompanyDetails } --> JobCard
 *
*/

function JobCard({ job }) {

  const { title, companyName = null, salary, equity } = job;

  return (

    <div className="jobcard">
      <h3>{title}</h3>
      {companyName &&
        <h4>{companyName}</h4>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;