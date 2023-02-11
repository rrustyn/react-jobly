import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";
import { Col, Row } from "react-bootstrap";

/**  CompaniesList component
 *
 * Renders list of all companies received from API
 *
 * Props:
 * - companies: array of company objects
 * - search: callback function to search against companies
 *
 * CompanyApp --> CompaniesList --> { SearchForm, CompanyCard }
*/

function CompanyList({ companies, search }) {

  return (
    <>
      <SearchForm search={search} />
      <Row className=" d-flex justify-content-center">
        {companies.length > 0
          ? companies.map(company => (
            <Col key={company.handle} xs={8}>
              <CompanyCard company={company} />
            </Col>
          ))
          : <p>Sorry, no results matching criteria</p>
        }
      </Row>
    </>
  );
}

export default CompanyList;;