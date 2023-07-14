import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TutorialService from "../../services/event.service";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { API_URL } from "../../config/index";
import { Container, Row, Col } from "react-bootstrap";
import EventPost from "./RelatedEventPost";
import Box from '@mui/material/Box';

const Tutorial = () => {
  const { id } = useParams();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    fileName: "",
    createdAt: "",
    tags: [] // Add tags property to the initialTutorialState
  };

  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  useEffect(() => {
    getTutorial(id);
  }, [id]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const getTutorial = (id) => {
    TutorialService.getPublic(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  useEffect(() => {
    filterTutorialsByTags();
  }, [currentTutorial, tutorials]);

  const filterTutorialsByTags = () => {
    const filteredTutorials = tutorials.filter(program =>
      program.tags.some(tag => currentTutorial.tags.includes(tag)) && program.id !== currentTutorial.id
    );
    setFilteredTutorials(filteredTutorials);
  };
  

  const retrieveTutorials = () => {
    TutorialService.getAll()
      .then(response => {
        const tutorialsData = response.data.map(tutorial => ({
          ...tutorial,
          tags: Array.isArray(tutorial.tags) ? tutorial.tags : [tutorial.tags] // Convert tags to array if it's not already an array
        }));
        setTutorials(tutorialsData);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>

<Row>
 <Col lg={8} className="mt-4" >

       <Card sx={{ maxWidth: 960 }} className='mt-4'>
        <CardMedia
          component="img"
          height="450"
          image={`${API_URL}event-content/${currentTutorial.fileName}`}
          alt="green iguana"
        />
      </Card>

      <Typography gutterBottom variant="h4" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "36px" }}>
        {currentTutorial.title}
      </Typography>

      <Typography gutterBottom variant="h10" component="div" className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }}>
        <CalendarMonthIcon /> {new Date(currentTutorial.createdAt).toLocaleDateString("en-US", options)}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#353839' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }}>
        {currentTutorial.description.split("\n").map((paragraph, index) => (
          <p align="justify" key={index}>
            {paragraph}
          </p>
        ))}
      </Typography>

                      </Col>
                      <Col lg={4}>



                      </Col>
                      {/* Widgets ends here */}
                 
                  </Row>


 


 
      <Container className="mt-4">
      <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 '}}  style={{ fontFamily: " klavika", fontSize: "36px" }}   >
               Related News & Event
                 </Box>
        <Row>
          <Col lg={12}>
            <Row>
              {filteredTutorials.map((program) => (
                <Col lg={4} className="mt-4" key={program.id}>
                  <EventPost
                    id={program.id}
                    tags={program.tags}
                    title={program.title}
                    description={program.description}
                    published={program.published}
                    category={program.category}
                    createdAt={program.createdAt}
                    fileName={program.fileName}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Tutorial;































{/*}
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TutorialService from "../../services/event.service";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { API_URL } from "../../config/index";




const Tutorial = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    fileName: "",
    createdAt: ""
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);


  const getTutorial = id => {
    TutorialService.getPublic(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);



const options = { month: 'long', day: 'numeric' , year: 'numeric'};
  return (

    <div>
    <Card sx={{ maxWidth: 960 }} ClassName= 'mt-4'>

        <CardMedia
          component="img"
          height="450"
          image={`${API_URL}event-content/${currentTutorial.fileName}`}
          alt="green iguana"
        />

      </Card>


      <Typography gutterBottom variant="h4" component="div" sx={{ color: '#353839 ', fontWeight: 'bold' }} className=" mt-4" style={{ fontFamily: " klavika", fontSize: "36px" }} >
            {currentTutorial.title}
          </Typography>
          <Typography gutterBottom variant="h10" component="div" className=" mt-4" style={{ fontFamily: " klavika", fontSize: "18px" }}  >
            <CalendarMonthIcon /> {new Date(currentTutorial.createdAt).toLocaleDateString("en-US",options)}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#353839 ' }} className="mt-4" style={{ fontFamily: "klavika", fontSize: "18px" }} >
              {currentTutorial.description.split("\n").map((paragraph, index) => (
               <p align="justify"  key={index}>
                 {paragraph}
               </p>
                 ))}
        </Typography>



    </div>





  );
};

export default Tutorial;


*/}
