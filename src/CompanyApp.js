import { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompaniesList from './CompaniesList';
import Loader from './Loader';

/**  CompanyApp component
 *
 * Renders CompaniesList component
 *
 * State:
 * - companies
 *
 * App --> RoutesList --> CompanyApp --> CompaniesList
*/

function CompanyApp() {

  const [companies, setCompanies] = useState({
    companiesList: [],
    isLoading: true
  });

  /** Make API call when component mounts to fetch all companies */

  useEffect(function getAllCompaniesOnMount() {

    async function getAllCompanies() {
      const res = await JoblyApi.getCompanies();

      setCompanies({
        companiesList: res,
        isLoading: false,
      });
    }

    getAllCompanies();
  }, []);

  /** Search function, calls on searchCompanies from JoblyApi to find companies
   * by company name from API
  */

  async function searchCompanies(searchTerm) {

    const res = await JoblyApi.getCompanies(searchTerm);

    setCompanies({
      ...companies,
      companiesList: res,
    });

  }

  if (companies.isLoading) return <Loader />;
  
  return (
    <CompaniesList
      companies={companies.companiesList}
      search={searchCompanies}
    />
  );
}

export default CompanyApp;