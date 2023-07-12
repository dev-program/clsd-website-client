
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";

export default function Molbio() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
        Molecular Biology & Microbiology Laboratory
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="singlePostImg"
          src="http://localhost:5001/api/collection-content/micro-biology.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
          The Molecular and Microbiology Laboratory is important for experimental studies of graduates and undergraduates.
           It provides services such as DNA extraction, isolation and purification of desired isolates and other services related in microbiology studies.
           The facilities of the microbiology and molecular laboratory can cater all kinds of microbiology analysis like presence of antimicrobial properties,
           phytochemical, and many more.
           </p>
           </div>

           <h3 className="mt-4" >
  Services
    </h3>
      <p className="singlePostParagraph"  align="justify">
<br></br>
⦁	Isolation and purification
<br></br>
⦁	Biochemical and phenotypic characterization  <br></br>
⦁	DNA extraction  <br></br>
⦁	Molecular identification  <br></br>
⦁	Disc diffusion assay  <br></br>
⦁	Agar dilution assay  <br></br>
⦁	Broth dilution assay

    <br />
    <br />

  </p>

    </div>
  );
}
