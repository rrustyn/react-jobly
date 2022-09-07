import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCard from './JobCard';

/**  CompanyDetails component
 *
 * Renders information of a single company and jobs associated from API
 *
 * States:
 * - company
 *
 * {RoutesList, CompanyList} --> CompanyDetails --> JobCard
 *
*/

function CompanyDetails() {

  const [company, setCompany] = useState({
    companyData: null,
    isLoading: true
  });

  const companyHandle = useParams();

  /** Makes API call when component mounts to retrieve data from a single company */

  useEffect(function getCompanyDetailsOnMount() {
    async function getCompanyDetails() {
      const res = await JoblyApi.getCompany(companyHandle.handle);
      setCompany({
        companyData: res,
        isLoading: false
      });
    }
    getCompanyDetails();
  }, []);

  if (company.isLoading) return <h2>Loading ...</h2>;

  return (
    <>
      <h1>{company.companyData.name}</h1>
      <p>{company.companyData.description}</p>
      {company.companyData.jobs.map(job => <JobCard key={job.id} job={job} />)}
    </>
  );

}

export default CompanyDetails;