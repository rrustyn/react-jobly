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
      <div className="card w-75">
        <img className="card-img-top w-50" src={logoUrl} alt={`${name} logo`} />
        {/* empty logo or default*/}
        <div className="card-body">
          <h3 className="card-title">Company: {name}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;