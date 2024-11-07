import React from 'react'
import './home.css'
import {  Container, Row } from 'react-bootstrap'
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
   <>
    <div className='shubh'>
  REFER YOUR FRIEND FOR 750 CREDITS KNOW MORE
   </div>
   <Container>
   <div className='shubh1'>
    <Row >
      <Col className='shubham2'>
   SampleWebsite
      </Col>
      <Col className='shubham3'>
    Home
      </Col>
      <Col className='shubham4'>
    Service
      </Col>
      <Col className='shubham5'>
    About
      </Col>
      <Col className='shubham6'>
    FAQs
      </Col>
      <Col className='shubham7'>
   Contact
      </Col>
      <Col className='shubham8'>
   Login
      </Col>
      <Col className='shubham9'>
    Sign Up
      </Col>
    </Row>
   </div>
   </Container>
   <Container>
   <div>
    <Row>
      <Col className='head'>
      <h1>This is a Heading Text</h1>
      <h2>This is a sample tagline. And this again another line.</h2>
      <Button variant="primary">Primary</Button>{' '}
      </Col>
      <Col>
      <img src='https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph'/>
      </Col>
    </Row>
   </div>
   <div>
    <Row>
      <Col>  PACKAGE</Col>
      <Col>SERVICING</Col>
      <Col>MAINTAINANCE</Col>
      <Col>DELATING/PAINTING</Col>
    </Row>

   </div>
   <div>
    <Row>Why Choose Us</Row>
    <Row>
      <Col>
      <h1>24/7 Service Stations</h1>
      This is a sample tagline. And this again another line.
      </Col>
      <Col>
      <img src='https://img.freepik.com/free-vector/suv-car-concept-illustration_114360-12267.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1707523200&semt=ais'/>
      </Col>
    </Row>
    <Row>How it Works</Row>
   </div>
   <div>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row>Customer Review</Row>
    <Row>
      <h1>Seenu Yadav, 47 yrs</h1>
      <h2>This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line. This is a line.
review
</h2>
review
    </Row>
   </div>
   </Container>
   </>
  )
}

export default Home
