import { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import CompanyList from './CompanyList';
import Loader from '../common/Loader';

/**  CompanyApp component
 *
 * Renders companyList component
 *
 * State:
 * - companies {obj}: 
 *      - companyList: list of companies from backend API request
 *      - isLoading: boolean updated with API response
 *
 * RoutesList --> CompanyApp --> CompanyList
*/

function CompanyApp() {
  const [companies, setCompanies] = useState({
    list: [],
    isLoading: true
  });

  /** Make API call when component mounts to fetch all companies */
  useEffect(function getAllCompaniesOnMount() {

    async function getAllCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies({
        list: res,
        isLoading: false,
      });
    }

    getAllCompanies();
  }, []);

  /** Search function makes to filter companies by name */
  async function searchCompanies(searchTerm) {
    const res = await JoblyApi.getCompanies(searchTerm);
    setCompanies({
      ...companies,
      list: res,
    });
  }

  if (companies.isLoading) return <Loader />;

  return (
    <CompanyList
      companies={companies.list}
      search={searchCompanies}
    />
  );
}

export default CompanyApp;