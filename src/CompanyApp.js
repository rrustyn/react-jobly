import { useState } from 'react';

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

  const [companies, setCompanies] = useState(null);

  //function search()

  return <p>Eventually CompaniesList</p>;
  //<CompaniesList companies={companies} search={search}/>
}

export default CompanyApp;