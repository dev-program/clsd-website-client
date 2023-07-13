import React from "react";
import { Link  } from "react-router-dom";
import ReactPlayer from 'react-player';
import { API_URL } from "../config/index";

import Typography from '@mui/material/Typography';

import {
    Card,Col,Row,
      Form,
      FormControl,
} from "react-bootstrap";


import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';

import 'react-html5video/dist/styles.css';




export default function Main() {


  return (
    <div>

      <section >

        <div className="container mb-4 mt-4 bg-color-white" >
          <div className="row">

            <div className="col-12 col-md-6 offset-xl-1 order-md-2 section pt-md-0 pb-0 mt-4 mb-4" >

            <img
                className="singlePostImg"
                src={`${API_URL}collection-content/research%20unit.jpg`}
                     alt=""
                />


            </div>
            <div className="col-12 col-md-6 col-xl-5 order-md-1 section">
          

              <Box   sx={{ color: '#0000FF ', fontWeight: 'bold'}}  style={{ fontFamily: " Bebas Neue", fontSize: "20px" }}   >
               RESEARCH AT CLSD
               </Box>

              <Box   sx={{ color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " Bebas Neue", fontSize: "36px" }}   >
              Lakes Sustainable Development Projects
               </Box>


              <Box   sx={{ color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " Bebas Neue", fontSize: "18px" }}   >

                <p  align="justify" >
                “As one of the Program for Research and Development Institutions for Niche Centers in the Regions for R&D (NICER) of Science for Change Programs, 
              the Laguna State Polytechnic University Los Baos Campus, College of Fisheries, acted as the project's implementing organization for the Lake NICER Project 2.
              "
                </p>
              
               </Box>



              <Link to="/all-clsd-project">
              <a

                className="btn btn-outline-primary animate"
                data-toggle="animation"
                data-animation="fadeUp"
                data-animation-order={3}
                data-animation-trigger="load"
              >
                More Info<i className="fas fa-arrow-right ml-2" />
              </a>
              </Link>


            </div>

            
          </div>
        </div>
      </section>

    </div>
  );
}
