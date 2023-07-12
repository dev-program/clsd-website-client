
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";

export default function FoodInnovation() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
        Food Innovation Laboratory
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="singlePostImg"
          src="http://localhost:5001/api/collection-content/post%20harvest.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        Provides equipment for the processing and development of fisheries products.
         Aids students in innovating existing products derived from fisheries products.

           </p>
           <p className="singlePostParagraph"  align="justify">
           Aims to guide multidisciplinary teams of students and young professionals through the
           process of innovation – from identifying challenges to developing consumer-centric solutions
            to laboratory prototyping and business model development.

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
