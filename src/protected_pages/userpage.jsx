import React from "react";


import {
    Container,
    } from "react-bootstrap";

import Navbar from "./navbar";

import UserList from "../protected_components/UserList";



const Eventpage = () => {

    return (
    <div className="mt-4 header" >
        <Container  bg="light"  className="mt-4 mb-4">
     
        <Navbar />
  

  
        <UserList />
        </Container>
   </div>

    )
}

export default Eventpage
