
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";
import {
    Card, Row,Col,Container
} from "react-bootstrap";
import { Button } from "@mui/material";


export default function AboutResearchUnit() {
  return (

    <div classname="mt-4 m-4">
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
      Research Units
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>

      <img
        className="singlePostImg"
        src="http://localhost:5001/api/collection-content/research%20unit.jpg"
        alt=""
      />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        The Science Research Laboratory (SRL) of the Laguna State Polytechnic University - Los Baños Campus (LSPU-LBC) was first established in early 2014 as the Science Laboratory Annex Building of the College of Fisheries (COF), originally designed for instruction purposes. With support from the former University President, Dr. Nestor M. De Vera, and the former Campus Director (LSPU-LB), Dr. Daniel D. Bunal, the plans to develop this laboratory facility into a science research complex was then approved through the initiative of Prof. Christian Paul P. de la Cruz, who served as the founding Station Manager. In 2015, some basic laboratory wares and simple equipment commonly used in science classes were acquired, in support of its original function as a teaching laboratory. In the same year, the Atomic Absorption Spectrometer (AAS) was acquired as SRL’s very first research instrument.
        </p>


      </div>
    </div>


</div>

  );
}
