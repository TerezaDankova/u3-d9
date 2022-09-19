import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";

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
      <Row className="justify-content-center pb-4">
        <Col md={9} className="mt-3" style={{ }}>
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col md={3} className="mt-4">
          <Link to="/favourites" className="btn link" style={{color: "green", fontSize: "20"}}>
            FAVOURITES JOBS
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col md={8} className="">
          {jobResults &&
            jobResults.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;