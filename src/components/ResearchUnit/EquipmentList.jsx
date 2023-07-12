import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
    Container,Card,Col,Row
} from "react-bootstrap";
import ReactPaginate from "react-paginate";

import TutorialService from "../../services/equipment.service";
import ResearcherPost from "./equipmentpost";


const Equipment = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;


  useEffect(() => {
    retrieveEvents();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveEvents = () => {
    TutorialService.getAllPublic()
      .then(response => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEvents();
    setCurrentEvent(null);
    setCurrentIndex(-1);
  };

  const setActiveEvent = (event, index) => {
    setCurrentEvent(event);
    setCurrentIndex(index);
  };

  const pageCount = Math.ceil(events.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




  return (
    <>

    <Row className='mt-4 mb-4' >
    <div className="col-md-6 " >
      <Col lg={12} >
      <Row >
        {events
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .reverse()
          .map((event) => (
              <Col lg={6}    onClick={() => setActiveEvent(event)}  >
              <ResearcherPost
                id={event.id}
                title={event.title}

                fileName={event.fileName}
              />
              </Col>
          ))}
       </Row>
       </Col>

       <ReactPaginate

          pageCount={pageCount}
          onPageChange={changePage}
       breakClassName={'page-item'}
       breakLinkClassName={'page-link'}
       containerClassName={'pagination'}
       pageClassName={'page-item'}
       pageLinkClassName={'page-link'}
       previousClassName={'page-item'}
       previousLinkClassName={'page-link'}
       nextClassName={'page-item'}
       nextLinkClassName={'page-link'}
       activeClassName={'active'}
       />




      </div>
      <div className="col-md-6">

        {currentEvent ? (

                <Card className='mt-4'>
                      <Card.Img  class="square" variant="top" src={`http://localhost:5001/api/equipment-content/${currentEvent.fileName}`} height="300" width="250"/>
                      <Card.Title><h2>  {currentEvent.title}</h2> </Card.Title>
                      <Card.Body >

                                <Row className='mt-4'  >
                                  <Col >
                                  <h5>About Equipment and Usage </h5>
                                    {currentEvent.description}  <br></br>

                                  </Col>

                                </Row>
                        </Card.Body>
                        </Card>

        ) : (
          <>

          </>
        )}

  </div>
  </Row>


    </>
  );
};

export default Equipment;
