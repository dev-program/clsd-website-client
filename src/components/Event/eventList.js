import React, { useState, useEffect } from "react";
import TutorialService from "../../services/event.service";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Grid } from "@mui/material";
import EventPost from "./eventListPost";

const EventListHome = () => {
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then(response => {
        setPrograms(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const byCategory = (program, category) => {
    if (category) {
      return program.category === category;
    }
    return program;
  };

  const bySearch = (program, search) => {
    if (search) {
      return program.title.toLowerCase().includes(search.toLowerCase());
    }
    return program;
  };

  const filteredList = (programs, category, search) => {
    return programs
      .filter(program => byCategory(program, category))
      .filter(program => bySearch(program, search));
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {filteredList(programs, category, search)
               // .reverse() // Reverse the order of the programs array
                .slice(1) // Skip the first event
                .map(program => (
                  <Col lg={12} className="mt-3">
                    <EventPost
                      id={program.id}
                      title={program.title}
                      description={program.description}
                      createdAt={program.createdAt}
                      fileName={program.fileName}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default EventListHome;
