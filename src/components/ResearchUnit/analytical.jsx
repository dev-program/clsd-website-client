
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";

export default function Analytical() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
        Analytical Services Laboratory
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="singlePostImg"
          src="http://localhost:5001/api/collection-content/analytical.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        Provides and conducts microbiological analyses as requested and specified by different clients who come from
        all walks of life (domestic, academic, research or industrial sectors within the university).
        </p>
           </div>

           <h3 className="mt-4">
  Services
    </h3>
  <p className="singlePostParagraph"  align="justify">
<br></br>
⦁	Sample classification
<br></br>
⦁	Assaying <br></br>
⦁	Analysis for chemical, material,   biological, geological  and environmental samples. <br></br><br></br>
The preparation room is used to store weak and strong/hazardous chemicals to avoid accidents in the laboratory.
         </p>


    </div>
  );
}
