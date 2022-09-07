import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/**  CompaniesList component
 *
 * Renders list of all companies received from API
 *
 * Props:
 * - companies: array of company objects
 * - search: callback function to search against companies
 *
 * CompanyApp --> CompaniesList --> { SearchForm, CompanyCard}
*/

function CompaniesList({ companies, search }) {

  return (
    <>
      <SearchForm search={search} />
      {/* if no companies */}
      {companies.length > 0 &&
        companies.map(company => (
          <CompanyCard key={company.handle} company={company} />)
        )}
    </>
  );
}

export default CompaniesList;