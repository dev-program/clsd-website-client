import React, { useState, useEffect } from "react";
import TutorialService from "../services/calendar.service";
import { Container, Row, Col, Form, FormControl, Button, Modal } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/en-gb"; // Import the locale you want to use
import { Typography } from '@mui/material';

const EventCalendar = () => {
  const [tutorials, setTutorials] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",

    createAt: null,
    updatedAt: null,
  });

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

  const events = tutorials.map((tutorial) => {
    console.log(tutorial.createdAt, tutorial.updatedAt);
    return {
      id: tutorial.id,
      title: tutorial.title,
      start: moment(tutorial.createdAt).toDate(),
      end: moment(tutorial.updatedAt).toDate(),
    };
  });
  


  const handleSelectSlot = ({ start, end }) => {
    setNewEvent((prevState) => ({
      ...prevState,
      createdAt: start,
      updatedAt: end, // Update the updatedAt value to the selected end time
    }));
    setShowModal(true);
  };

  


  const handleCloseModal = () => {
    setShowModal(false);
    setNewEvent({
      title: "",
      createdAt: null,
      updatedAt: null
    });
  };


  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  
  const handleCreateEvent = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("published", newEvent.published);
    formData.append("createdAt", newEvent.createdAt);
    formData.append("updatedAt", newEvent.updatedAt); // Update the assignment of updatedAt
  
    TutorialService.create(formData)
      .then((response) => {
        console.log(response);
        // Perform any additional actions after successful creation
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  
    setShowModal(false);
    setNewEvent({
      title: "",
      description: "",
      createdAt: null,
      updatedAt: null,
    });
  };
  

  return (
    <>
      <Row>
        <Col lg={8} className="mt-4">
          <Calendar
            views={["day", "agenda", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh" }}
            onSelectSlot={handleSelectSlot}
          />
        </Col>
        <Col lg={4}>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="h5">Create Event</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="eventTitle">
              <Form.Label>
                <Typography variant="body1">Title</Typography>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="eventDescription">
              <Form.Label>
                <Typography variant="body1">Description</Typography>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
            </Form.Group>



            <Form.Group controlId="eventStart">
              <Form.Label>
                <Typography variant="body1">Start Date/Time</Typography>
              </Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.createdAt ? moment(newEvent.createdAt).format("YYYY-MM-DDTHH:mm") : ""}
                onChange={(e) => setNewEvent({ ...newEvent, createdAt: moment(e.target.value).toDate() })}
              />
            </Form.Group>
            <Form.Group controlId="eventEnd">
              <Form.Label>
                <Typography variant="body1">End Date/Time</Typography>
              </Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.updatedAt ? moment(newEvent.updatedAt).format("YYYY-MM-DDTHH:mm") : ""}
                onChange={(e) => setNewEvent({ ...newEvent, updatedAt: moment(e.target.value).toDate() })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            <Typography variant="body1">Cancel</Typography>
          </Button>
          <Button variant="primary" onClick={handleCreateEvent}>
            <Typography variant="body1">Create</Typography>
          </Button>
        </Modal.Footer>
      </Modal>


      
    </>
  );
};

export default EventCalendar;
