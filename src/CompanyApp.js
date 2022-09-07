import { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompaniesList from './CompaniesList';

/**  CompanyApp component
 *
 * Renders CompaniesList component
 *
 * States:
 * - companies
 *
 * App --> RoutesList --> CompanyApp
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

    const res = await JoblyApi.searchCompanies(searchTerm);

    setCompanies({
      ...companies,
      companiesList: res,
    });

  }

  if (companies.isLoading) return <p>loading...</p>;

  return (
    <CompaniesList
      companies={companies.companiesList}
      search={searchCompanies}
    />
  );
}

export default CompanyApp;