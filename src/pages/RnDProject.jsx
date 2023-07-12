import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import RnDProject from "../components/R&D/rnd_project";


import "../pages/newheader.style.css";
const AllLiterature = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >     <h2> R&D and Non-R&D Project</h2> </Box>

           <RnDProject />

           <Footer />
       </Container>
       </div>
    )
}

export default AllLiterature
