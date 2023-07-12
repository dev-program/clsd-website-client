import React from 'react';
import {
    Container,Row,Col

} from "react-bootstrap";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"


import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import EventDetails from  "../components/Event/NewsEventView";

import "../pages/newheader.style.css";
const PostProgramPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/all-news-event`);
  }
    return (
       <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
            <Navbar />
        
            <Container className="mt-4 mb-4" >
                  <Row>
                      <Col lg={8} className="mt-4" >

                            <EventDetails />


                      </Col>


                      <Col lg={4}>



                      </Col>
                      {/* Widgets ends here */}

                  </Row>
              </Container>




            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
