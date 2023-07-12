import React from 'react';
import {
    Container,

} from "react-bootstrap";


import { Button } from "@mui/material";
import Box from '@mui/material/Box';



import Header from "../navigation/Headerdemo";
import Navbar from "../navigation/Navdemo";
import Footer from "../navigation/Footer";


import Equipment from "./../components/ResearchUnit/equipment";


import "../pages/newheader.style.css";
const AllEquipment = () => {

    return (
      <div className="mt-4 header" >
       <Container   bg="primary"  className="mt-4"   >
         <Header />
           <Navbar />
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }} centered className="mt-4" >     <h2>CLSD Equipment List </h2> </Box>

           <Equipment />

           <Footer />
       </Container>
       </div>
    )
}

export default AllEquipment
