import React, { useState } from "react";
//import "./Posts.css";
import {
    Container,
    Row,
    Col,

    Form,
    Button,
    FloatingLabel
} from "react-bootstrap";



export default function ContactUs() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);


  return (



    <Container>

    <Row  className="mt-4"> <h1  className="mb-3"> Contact Us</h1>
        <Col lg={8}>
            <Row>


    {/* <Form  onSubmit={handleSubmit}>
*/}

{/*
      <Form  >
  <Form.Group className="mb-1" controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control
    equired
    inline
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
   />
    <Form.Text className="text-muted" >

    </Form.Text>
    </Form.Group>

  <Form.Group className="mb-4" controlId="formBasicPassword">
    <Form.Label> </Form.Label>
    <Form.Control
    equired
    inline
          type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
  </Form.Group>



  <FloatingLabel className="mb-3"   controlId="floatingTextarea2" label="Message">
    <Form.Control
      required
      inline
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    />
  </FloatingLabel>


  <Button  type="submit"   className="mb-1" variant="primary"   >
    Send Message
  </Button>

</Form>
*/}


                      </Row>
                        <Row className="mt-4">
                        <Col sm>
                        <h4> Address</h4>
                        <p>Brgy. Malinta, Los Baños, Laguna</p>
                        </Col>

                        <Col sm>
                        <h4> Contacts</h4>
                        <p>Tel. no.: </p>
                        <p>Email Adress: nicer.program@lspu.edu.ph </p>


                        </Col>

                        <Col sm>
                        <h4> Hours</h4>
                        <p>8:00 - 5:00 pm </p>
                      {/*}  <p>Sat-Sun: Closed </p> */}
                        </Col>
                        </Row>
                        </Col>


                        <Col lg={4}>

                        </Col>


                        </Row>
            </Container>
  );
};
