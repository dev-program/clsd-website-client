import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TutorialService from "../../services/event.service";


import {
    Col,Row,Container
} from "react-bootstrap";



import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TagIcon from '@mui/icons-material/Tag';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
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
  const [message, setMessage] = useState("");

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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };




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
      {  /*
        <CardContent>
         
        </CardContent>
        */

        } 
      </Card>


      <Typography gutterBottom variant="h6" component="div" sx={{ color: '#4169e1', fontWeight: 'bold' }}>
            {currentTutorial.title}
          </Typography>
          <Typography gutterBottom variant="h10" component="div" sx={{ typography: 'body2' }}>
            <CalendarMonthIcon /> {new Date(currentTutorial.createdAt).toLocaleDateString("en-US",options)}
          </Typography>
      <Typography variant="subtitle1" color="text.secondary">
           <p align='justify'>{currentTutorial.description} </p>
          </Typography>

    </div>





  );
};

export default Tutorial;
