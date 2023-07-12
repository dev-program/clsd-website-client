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


                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >
                          <h2>Head Researcher </h2>
                            </Box>
                            <ResearchHead />
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >
                              <h2>Faculty Researchers</h2>
                              </Box>
                              <ResearchFaculty />
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >
                              <h2>Assistant Researcher  </h2>
                              </Box>
                                  <ResearchAssistant />








            <Footer />
        </Container>
        </div>
    )
}

export default PostProgramPage
