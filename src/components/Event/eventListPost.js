

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {
    Col,Row,Container
} from "react-bootstrap";
import {paragraph} from "./styles.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TagIcon from '@mui/icons-material/Tag';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { API_URL } from "../../config/index";


export default function ProgramPost({ id, title,  description, createdAt, fileName }) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/news-event/${id}`);
  }
const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (

<>
{/*}
    <div className='mt-4' onClick={handleClick}  >

                  <Row   align="left"  >
                  <Col md='5'  bg="light"   >
                    <Card.Img src={imageUrl}  with="80" height="75"    alt="img"/>
                  </Col>
                    <Col md='7' bg="light"   >
                      <h6>   {title}  </h6>
                    <CalendarMonthIcon /> {new Date(createdAt.seconds*1000).toLocaleDateString("en-US",options)}
                    </Col>
                  </Row>

    </div>
*/}



<Card onClick={handleClick}  ClassName= 'mt-4'>
  <CardActionArea>
  <Row   align="left"  >
  <Col md='6'  bg="light"   >

    <CardMedia
      component="img"
      height="150"
    image={`${API_URL}event-content/${fileName}`}
      alt="green iguana"
    />
    </Col>
      <Col md='6' bg="light"   >

    <CardContent>
      <Typography gutterBottom variant="subtitle2" component="div" sx={{ color: '#4169e1', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography gutterBottom variant="h10" component="div" sx={{ typography: 'body2' }}>
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>

    </CardContent>
    </Col>
  </Row>
  </CardActionArea>
</Card>



</>





  );
}
