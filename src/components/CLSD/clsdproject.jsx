import React, { useState, useEffect } from "react";
import TutorialDataService from "../../services/tutorialservice";
import { Link } from "react-router-dom";


import { storage, db } from "../../services/firebase";
import firebase from 'firebase/compat/app';



import EventPost from "./clsdprojectpost";
import ReactPaginate from "react-paginate";



import {
    Container,
    Row,
    Col,
    Form,
    FormControl,
} from "react-bootstrap";






const AllNewsEventHome = () => {
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
/*
  const onDataChange = (items) => {
  let tutorials = [];

  items.forEach((item) => {
    let id = item.id;
    let data = item.data();
    tutorials.push({
      id: id,
      title: data.title,
      description: data.description,
      createdAt: data.createdAt,
      published: data.published,
      imageUrl: data.imageUrl,
    });
  });

    setPrograms(tutorials);
  };


    useEffect(() => {
      TutorialDataService.getAll().onSnapshot(onDataChange)

      return () => {
        TutorialDataService.getAll().onSnapshot( onDataChange);
      };
    }, []);
*/

    useEffect(() => {
      const unmount = db.collection("projects")
      .where('category' ,'==', 'CLSD project')
      .orderBy('createdAt','desc')
      .onSnapshot((snapshot) => {
        const tutorials = [];
        snapshot.forEach((doc) => {
          tutorials.push(
            {
              id: doc.id,
                ...doc.data(),
            });
        });
        setPrograms(tutorials);
      });
      return unmount;
    }, []);







    const refreshList = () => {
      setCurrentTutorial(null);
      setCurrentIndex(-1);
    };

    const setActiveTutorial = (tutorial, index) => {
    //  const { title, description, published } = tutorial; /* tutorial */

      setCurrentTutorial(tutorial);

      setCurrentIndex(index);
    };



  const byCategory = (program, category) => {
  if (category) {
    return program.category === category;
  } else return program;
};
const bySearch = (program, search) => {
  if (search) {
    return program.title.toLowerCase().includes(search.toLowerCase());
  } else return program;
};
const filteredList = (programs, category, search) => {
  return programs
    .filter((program) => byCategory(program, category))
    .filter((program) => bySearch(program, search));
};


          const pageCount = Math.ceil(programs.length / usersPerPage);
          const changePage = ({ selected }) => {
            setPageNumber(selected);
          };

  return (

    <>


    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <FormControl
            placeholder="search..."
            type="search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose Category</option>
          <option value="CLSD News">CLSD News</option>
          <option value="Training and Workshop">Training and Workshop</option>
          <option value="R&D Participation">CLSD Participation on R&D</option>
          <option value="Opportunities">Opportunities</option>
          <option value="Approved Projects">Newly Approved R&D Projects</option>
          <option value="University Notices">University notices</option>
          <option value="Others">Others</option>

        </select>

        </Form>



    <Container    className="mt-4" >
                <Row>
        <Col lg={12}>  {/*<h2 ><small> Previous Events </small></h2> */}
     <Row>
      {filteredList(programs, category, search)
        .slice(pagesVisited, pagesVisited + usersPerPage)


        .map((program) => (
            <Col lg={4} className="mt-4">
          <EventPost
            id={program.id}
            title={program.title}
            rattionale={program.rationale}
            methodology={program.methodology}


            createdAt={program.createdAt}
            imageUrl={program.imageUrl}
          />
            </Col>
        ))}
        <div className="mt-4">
        <ReactPaginate

       pageCount={pageCount}
        onPageChange={changePage}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        />

         </div>

        </Row>
    </Col>


    <Col lg={4}>
    </Col>


</Row>
</Container>





    </>


  );
};

export default AllNewsEventHome;
