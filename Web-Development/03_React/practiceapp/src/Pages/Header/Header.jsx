import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "bootstrap";


function Header() {
  return (
    <>
      <Container className="navbar">
        <Row>
          <Col>
            <h1>This is a Heading Text</h1>
            <h2>This is a sample tagline. And this again another line.</h2>

            <Row>
            
            <div className="container">
             
               <button className="bottom-button">Click Me</button>
             </div>
            </Row>
          </Col>
          <Col className="image1">
            <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph" />
          </Col>
        </Row>
      </Container>
    
      <div>
        <Row>
          <Col  coolbox>
           
          <img src="https://cdn-icons-png.freepik.com/256/1067/1067555.png" />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>

    </>
  );
}

export default Header;
