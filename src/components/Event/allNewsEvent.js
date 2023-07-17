

import React, { useState, useEffect } from "react";
import TutorialService from "../../services/event.service";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import EventPost from "./allNewsEventPost";
import ReactPaginate from "react-paginate";

const AllNewsEventHome = () => {
  const [tutorials, setTutorials] = useState([]);

  const [search, setSearch] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
 
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = (tag) => {
    TutorialService.getAllPublic(tag)
      .then((response) => {
        let filteredTutorials = response.data;
  
        if (tag) {
          filteredTutorials = filteredTutorials.filter(
            (tutorial) => tutorial.tags.includes(tag)
          );
        }
        setTutorials(filteredTutorials);
        console.log(response.data);
  
        // Get all the tags from the filtered tutorials
        const allTags = filteredTutorials.flatMap((tutorial) => tutorial.tags);
  
        // Get the unique tags and count their occurrences
        const tagsCount = {};
        allTags.forEach((tag) => {
          tagsCount[tag] = (tagsCount[tag] || 0) + 1;
        });
  
        // Sort the tags based on their occurrences in descending order
        const sortedTags = Object.keys(tagsCount).sort(
          (a, b) => tagsCount[b] - tagsCount[a]
        );
  
        // Set the available tags to the top 5 most frequent tags
        const topTags = sortedTags.slice(0, 5);
        setAvailableTags(topTags);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  

  const findByTitle = () => {
    TutorialService.findByTitle(searchTitle)
      .then((response) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    retrieveTutorials(tag);
  };

  const pageCount = Math.ceil(tutorials.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      findByTitle();
    }
  };

  const handleClearSearch = () => {
    setSearchTitle("");
    retrieveTutorials();
  };

  return (
    <>
      <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <FormControl
          placeholder="search..."
          type="search"
          aria-label="Search"
          value={searchTitle}
          onChange={onChangeSearchTitle}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={findByTitle}>
          Search
        </button>
        <button className="btn btn-secondary" onClick={handleClearSearch}>
          Clear
        </button>
      </Form>

      <div className="tag-filter">
        <button
          className={`m-3 btn btn-sm btn-info ${selectedTag === "" ? "active" : ""}`}
          onClick={() => handleTagFilter("")}
        >
          All
        </button>

        {availableTags.map((tag) => (
          <button
            className={`m-3 btn btn-sm btn-info ${selectedTag === tag ? "active" : ""}`}
            onClick={() => handleTagFilter(tag)}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <Container className="mt-4">
        <Row>
          <Col lg={12}>
            <Row>
              {tutorials &&
                tutorials
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((program) => (
                    <Col lg={4} className="mt-4">
                      <EventPost
                        id={program.id}
                        tags={program.tags}
                        title={program.title}
                        description={program.description}
                        published={program.published}
                        category={program.category}
                        createdAt={program.createdAt}
                        fileName={program.fileName}
                      />
                    </Col>
                  ))}
            </Row>

            <div className="mt-4">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
              />
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default AllNewsEventHome;


