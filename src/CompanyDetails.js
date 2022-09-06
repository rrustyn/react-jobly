import { useState } from 'react';

/**  CompanyDetails component
 *
 * Renders information of a single company and jobs associated from API
 *
 * States:
 * - company
 *
 * App --> RoutesList --> CompanyDetails
 * TODO: which should be included in ds?
 * CompanyApp --> CompanyList --> CompanyDetails
 *
*/

function CompanyDetails() {

  const [company, setCompany] = useState(null);

  return (
    <>
      {/* company.jobs.map(job => <JobCard />) */}
      <p>Company Details</p>;
    </>
  );

}

export default CompanyDetails;