

import React, { useState, useEffect } from "react";
import TutorialService from "../../services/event.service";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/en-gb"; // Import the locale you want to use

const EventCalendar = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then((response) => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const localizer = momentLocalizer(moment);

  const events = tutorials.map((tutorial) => ({
    id: tutorial.id,
    title: tutorial.title,
    start: moment(tutorial.createdAt).toDate(),
    end: moment(tutorial.createdAt).toDate(),
  }));

  return (
    <>

<Row>
 <Col lg={8} className="mt-4" >


        
          <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "80vh" }}
      
      />
       
       </Col>
                      <Col lg={4}>



                      </Col>
                      {/* Widgets ends here */}
                 
                  </Row>




    </>
  );
};

export default EventCalendar;

