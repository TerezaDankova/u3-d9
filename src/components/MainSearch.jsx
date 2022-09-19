
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobResult from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const [jobResults, setJobResults] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}`
      );
      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setJobResults(data.data);
        console.log(jobResults);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchJobs();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <Link to="/favourites" className="btn btn-primary">
            Go on page with your Favorite Jobs
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={8} className="mx-auto mb-5">
          {jobResults &&
            jobResults.map((jobData) => (
              <JobResult key={jobData._id} data={jobData} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;