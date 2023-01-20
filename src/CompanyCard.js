import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

/** CompanyCard component
*
*
*  Renders information on a company {name, description, logo}
*  CompaniesList --> CompanyCard
*/
function CompanyCard({ company }) {

  const { name, description, handle, logoUrl } = company;

  return (
    <Link to={`/companies/${handle}`}>
      <Card className="my-3 w-75">
        <Card.Body>
          {logoUrl && <Image className="float-right w-25" src={logoUrl}
            alt={`${name} logo`} /> }
          <Card.Title className="text-left">Company: {name}</Card.Title>
          <Card.Text className="text-left">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link >
    );
}

export default CompanyCard;
