import { Link } from "react-router-dom";

/**  CompanyCard component
 *
 * Renders information on a company {name, description, logo}
 *
 * CompaniesList --> CompanyCard
*/

function CompanyCard({ company }) {

  const { name, description, handle, logoUrl } = company;

  return (
    <Link to={`/companies/${handle}`}>
      <div className="CompanyCard">
        {/* empty logo or default*/}
        <h3>Company: {name}</h3> <img src={logoUrl} alt={`${name} logo`} />
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;