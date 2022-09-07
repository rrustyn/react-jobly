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
  
  async function searchCompanies(searchTerm) {
    
    console.log("searched for:", searchTerm);
    
    const res = await JoblyApi.searchCompanies(searchTerm);
    
    setCompanies({
      ...companies,
      companiesList: res,
    });
  }

  if (companies.isLoading) return <p>loading...</p>
  
  return (
    <CompaniesList
      companies={companies.companiesList}
      search={searchCompanies}
    />
  );
}

export default CompanyApp;