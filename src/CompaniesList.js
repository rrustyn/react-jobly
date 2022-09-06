import SearchForm from "./SearchForm";

/**  CompaniesList component
 *
 * Renders list of all companies received from API
 *
 * Props:
 * - companies
 * - search
 *
 * App --> RoutesList --> CompanyApp --> CompaniesList
*/

function CompaniesList({ companies, search }) {

  return (
    <>
      <SearchForm search={search} />
      <p>Eventually CompaniesList</p>;
      {/* companies.map(company => <CompanyCard />) */}
    </>
  );
}

export default CompaniesList;