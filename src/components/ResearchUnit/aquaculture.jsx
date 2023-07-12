
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";

export default function Molbio() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
        Aquaculture Research Station
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="singlePostImg"
          src="http://localhost:5001/api/collection-content/aquaculture%20station.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        Aquaculture Research Station- Develop and improve farming technologies for aquatic species,
        pilot trials and demonstration projects, facilities for industry and researchers to carry out projects and trials,
        work with others towards sustainable aquaculture and fisheries, train staff and students and educate the public about aquaculture.

           </p>
           </div>

           <h3 className="mt-4">
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
