

import React from "react";
import {useNavigate} from "react-router-dom"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { API_URL } from "../../config/index";
import Box from '@mui/material/Box';


export default function ProgramPost({ id,title,  fileName }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }
const options = { month: 'long', day: 'numeric' , year: 'numeric'};
  return (


<>



<Card onClick={handleClick}  >
  <CardActionArea>
    <CardMedia
      component="img"
      height="220"
          image={`${API_URL}event-content/${fileName}`}
      alt="green iguana"
    />
    <CardContent>

      <Typography gutterBottom variant="h8" component="div" sx={{ color: '#353839', fontWeight: 'bold' }} style={{ fontFamily: " klavika", fontSize: "18px" }} >
        {title}
      </Typography>


    </CardContent>
  </CardActionArea>

</Card>





</>





  );
}
