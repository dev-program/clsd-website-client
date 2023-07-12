

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

import {paragraph} from "./styles.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TagIcon from '@mui/icons-material/Tag';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { API_URL } from "../../config/index";



export default function ProgramPost({ id, tags,title, description, category,  published, createdAt,   fileName }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }
const options = { month: 'long', day: 'numeric' , year: 'numeric'};
  return (


<>
{/*
        <Card className="mt-4" bg="light"  onClick={handleClick}>
          <Card.Img     variant="top"   width="250px" height="250px"   src={imageUrl}   />
            <Card.Body>
                <Card.Title >   <h6>{title}  </h6>  </Card.Title>
                <Card.Text >

                  <CalendarMonthIcon /> {new Date(createdAt.seconds*1000).toLocaleDateString("en-US",options)}
                </Card.Text>
            </Card.Body>
                <p align='left'><small> <TagIcon />: {category}  </small></p>
        </Card>
*/
}
<Card onClick={handleClick}  >
  <CardActionArea>
    <CardMedia
      component="img"
      height="220"
          image={`${API_URL}/event-content/${fileName}`}
      alt="green iguana"
    />
    <CardContent>
    <Typography gutterBottom variant="h8" component="div" sx={{ color: '#4169e1', fontWeight: 'bold' }}>
        {tags}
      </Typography>
      <Typography gutterBottom variant="h8" component="div" sx={{ color: '#4169e1', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" sx={{ typography: 'body2' }}>
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>

    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Share
    </Button>
  </CardActions>
</Card>





</>





  );
}
