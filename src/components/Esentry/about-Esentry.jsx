
import React from "react";

import { Link } from "react-router-dom";
import "./posts.css";

export default function Ecoinformatics() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
      Ecoinformatics Laboratory
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="singlePostImg"
          src="http://localhost:5001/api/collection-content/tadlac%20lake.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        Develop and improve farming technologies for aquatic species, pilot trials and demonstration projects,
         facilities for industry and researchers to carry out projects and trials, work with others towards
          sustainable aquaculture and fisheries, train staff and students and educate the public about aquaculture.
        </p>

    </div>
    </div>
  );
}
