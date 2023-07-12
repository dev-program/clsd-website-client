import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link ,} from 'react-router-dom';
import EventService from "../../services/EventService";

import {pagebreak} from "./styles.css";
import { storage, db } from "../../services/firebase";
import firebase from 'firebase/app';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TagIcon from '@mui/icons-material/Tag';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {
    Container,
    Row,
    Col,
    Form,
    FormControl,
} from "react-bootstrap";
export default function Album(){
  const [imageUrl, setImageUrl] = useState([]);
  const [title, setTitle] = useState("");

  const [projectLeader, setProjectLeader] = useState("");
  const [agency, setAgency] = useState("");
  const [coopagency1, setCoopAgency1] = useState("");
    const [coopagency2, setCoopAgency2] = useState("");
      const [coopagency3, setCoopAgency3] = useState("");
        const [coopagency4, setCoopAgency4] = useState("");

          const [site1, setSite1] = useState("");
            const [site2, setSite2] = useState("");



  const [rationale, setRationale] = useState("");
  const [methodology, setMethodology] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());



 const { id }= useParams();

 useEffect(() => {
   const unmount = db.collection("projects")
     .doc(id)
     .onSnapshot((doc) => {
       setImageUrl(doc.data().imageUrl);
       setTitle(doc.data().title);
       setProjectLeader(doc.data().projectLeader);
       setAgency(doc.data().agency);
        setCoopAgency1(doc.data().coopagency1);
        setCoopAgency2(doc.data().coopagency2);
        setCoopAgency3(doc.data().coopagency3);
        setCoopAgency4(doc.data().coopagency4);
            setSite1(doc.data().site1);
            setSite2(doc.data().site2);



       setRationale(doc.data().rationale);
       setMethodology(doc.data().methodology);
       setCreatedAt(doc.data().createdAt);



     });
     return unmount
 }, [id]);


const options = { year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <>
{/*}
            <Container   style={{ maxWidth: '960px' }}>
            <Card.Img  alt="image" variant="top"      src={imageUrl}
                  alt='main'
                  width="550" height="450"
                  alt="image"   />
                    <Card.Title className='mt-4'><h3>{title}</h3> </Card.Title>
                <Card.Body>

               <CalendarMonthIcon />  {new Date(createdAt.seconds*1000).toLocaleDateString("en-US",options)}
                <Card.Text>    <p className="singlePostParagraph mt-4"   align="justify" > {description}</p> </Card.Text>

                </Card.Body>
              </Container>

*/}



<Container sx={{ maxWidth: 960 }} ClassName= 'mt-4 mb-4'>
  <div>
    <CardMedia
      component="img"
      height="450"
      witth="450"
      image={imageUrl}
      alt="green iguana"
    />
    <div>
      <br></br>
      <Typography gutterBottom variant="h6" component="div" sx={{ color: '#4169e1', fontWeight: 'bold' }}>
        {title}
      </Typography>


      <Typography gutterBottom variant="subtitle2" component="div" sx={{ fontStyle: 'italic' }}>
        <CalendarMonthIcon /> {new Date(createdAt).toLocaleDateString("en-US",options)}
      </Typography>
            <br></br>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontStyle: 'italic' }}>
           <h3> Project Leader :    {projectLeader} </h3>
      </Typography>
            <br></br>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontStyle: 'italic' }}>
           <h5> Implementing Agency :    {agency} </h5>
      </Typography>
            <br></br>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontStyle: 'italic' }}>
      <h5> Cooperating Agency :   </h5>
           <h6>    {coopagency1}      <br></br>{coopagency2}       <br></br>{coopagency3}        <br></br>{coopagency4} </h6>

      </Typography>

      <br></br>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontStyle: 'italic' }}>
      <h5> Project Site:   </h5>
     <h6>    {site1}      <br></br>{site2}       </h6>
     </Typography>

        <br></br>
      <Typography variant="subtitle1" color="text.secondary"  sx={{ textAlign: 'justify', fontSize: 16 }}>
          <h3> Rationale:  </h3>   {rationale}

      </Typography>
      <br></br>
      <Typography variant="subtitle1" color="text.secondary"  sx={{ textAlign: 'justify', fontSize: 16 }}>
        <h3> Methodology :  </h3>   {methodology}
      </Typography>
    </div>
  </div>
  {/*}
  <CardActions>
    <Button size="small" color="primary">
      Share
    </Button>
  </CardActions>

  */}
</Container>



    </>





  );
};
