import React from 'react';
import {
    Container

} from "react-bootstrap";
import Box from '@mui/material/Box';


import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";

import ResearchHead from  "../components/ResearchTeam/ResearchHead";
import ResearchFaculty from  "../components/ResearchTeam/ResearchFaculty";
import ResearchAssistant from  "../components/ResearchTeam/ResearchAssistant";

import "../pages/newheader.style.css";
const PostProgramPage = () => {

    return (
        <div className="mt-4 header" >
        <Container   bg="primary"  className="mt-4"   >
          <Header />
          <Navbar />

          <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "42px" }}   >
           CLSD Research Team
          </Box>


          <Box   style={{ fontFamily: " klavika", fontSize: "36px" ,  color: '#353839 ', fontWeight: 'bold' }}   >
          Station Manager
          </Box>
          <ResearchHead />         
          <Box   style={{ borderBottom: 2, borderColor: 'divider' , fontFamily: " klavika", fontSize: "36px" ,  color: '#353839 ', fontWeight: 'bold' }}   >
          Faculty Researcher
          </Box>
          <ResearchFaculty />              
                        
          <Box   style={{ borderBottom: 2, borderColor: 'divider' , fontFamily: " klavika", fontSize: "36px" ,  color: '#353839 ', fontWeight: 'bold' }}   >
          Assistant Researcher
          </Box>      
          <ResearchAssistant />              
                       
                               





            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
