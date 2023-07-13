import React from 'react';
import {
    Container,Row,Col

} from "react-bootstrap";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"



import Events from  "../components/Event/NewsEvent";
import EventList from  "../components/Event/eventList";


const PostProgramPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/all-news-event`);
  }
    return (
             
        <Container   bg="primary"  className="mt-4"   >
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "16px" }}   >
             <h2> News & Event </h2>
               </Box>
    
      <Row className="mt-4 mb-4">
       <Col lg={7}>     <Events />     </Col>
       <Col lg={5} >      <EventList/>         </Col>
      </Row>

        </Container>
       
    )
}

export default PostProgramPage
