
import React from "react";


import "./posts.css";

export default function AboutCLSD() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <h1 className="singlePostTitle">
      Center for Lakes Sustainable Development (CLSD)
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
        <img
          className="clsdsinglePostImg"
          src="http://localhost:5001/api/collection-content/clsd%20main.jpg"
          alt=""
        />

        <div className="singlePostInfo">

        </div>
        <p className="singlePostParagraph"  align="justify">
        Center for Lakes Sustainable Development (CLSD), under the “Accelerated R&D Program for
        Capacity Building of Research and Development Institutions and Industrial Competitiveness Niche Centers in the Regions
         for R&D (NICER) of Science for Change Programs, aims to develop solutions and strategies for effective management
          and sustainability of various lakes in Region 4A or the Calabarazon Region, comprising the provinces of
           Cavite, Laguna, Batangas, Rizal and Quezon, since no lake environment in the Philippines is entirely free
            from anthropogenic stresses. The project started on October 2021.
        </p>

        <p className="singlePostParagraph"  align="justify">
            This project is being implemented by Assistant Professor Christian Paul de la Cruz of
             Laguna State Polytechnic University in Los Baños campus. Co-implementing with de la Cruz are Calabarzon local government units,
            the Bureau of Fisheries and Aquatic Resources Region 4A, the University of the Philippines Los Baños-School of Environmental Science and Management,
            UP Diliman, the Laguna Lake Development Authority, and the Southeast Asian Limnological Network, a nonprofit organization.
        </p>

            <p className="singlePostParagraph"  align="justify">
          The Laguna State Polytechnic University Los Baños Campus, College of Fisheries served as the implementing agency of
          the Lake NICER Project 2 entitled “Predictive Estimation of Ecological Carrying Capacity: Tool for
           Sustainable Aquaculture Development in Selected Crater Lakes in the Province of Quezon” that aims to
            make scientific basis for crafting policies related to effective management of lake environments,
            particularly in small crater lakes used for aquaculture and ecotourism, that can be beneficial to the lake communities.
          </p>
      </div>
    </div>
  );
}
