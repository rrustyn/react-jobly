import { Card, Row, Col } from 'react-bootstrap';


/**  JobCard component
 *
 * Individual job card displaying information of jobs:
 *  - title
 *  - companyName (optional, if from companiesList: null)
 *  - salary
 *  - equity
 *
 * Props:
 * - job
 *
 * { JobsList, CompanyDetails } --> JobCard
 *
*/

function JobCard({ job }) {

  const { title, companyName = null, salary, equity } = job;

  return (
    <Card className="text-center w-75 my-3 mx-auto">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {companyName && <Card.Subtitle>{companyName}</Card.Subtitle>}
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>Equity: {equity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;