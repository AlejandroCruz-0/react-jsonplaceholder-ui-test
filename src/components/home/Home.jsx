import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h2>
              Esto es una prueba de react con datos ficticios de{" "}
              <a href="https://jsonplaceholder.typicode.com/">
                Jsonplaceholder
              </a>
            </h2>
            <p>Este proyecto utiliza siguientes librerias:</p>
            <ul>
              <li>React</li>
              <li>react-bootstrap</li>
              <li>react-router</li>
              <li>react-router-bootstrap</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
