import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import AllLiterature from "../components/Literature/Literature";


import "../pages/newheader.style.css";
const AllNewsEventView = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >
             <h2>All Literature </h2>
               </Box>

           <Container className="mt-4 mb-4" >



                           <AllLiterature/>





             </Container>




           <Footer />
       </Container>
       </div>
    )
}

export default AllNewsEventView
