import JobCard from "./JobCard";
import SearchForm from "../common/SearchForm";
import { Row, Col } from 'react-bootstrap';



/**  JobsList component
 *
 * List of all jobs received from API
 *
 * Props:
 * - jobs: array of job objects
 * - search: callback function to search against jobs
 *
 * JobApp --> JobsList --> JobCard
*/

function JobsList({ jobs, search }) {
  return (
    <>
      <SearchForm search={search} />
      <Row>
        {jobs.length > 0
          ? jobs.map((job) => (
            <Col key={job.id} xs={4}>
              <JobCard job={job} />
            </Col>
          ))
          : <p>Sorry, no results matching criteria</p>
        }
      </Row>
    </>
  );
}

export default JobsList;




