import { React, useState, useEffect } from "react";
import endpoints from "../endpoints";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    const apiEndpointWithLimit = endpoints.Posts + "?_limit=12";
    console.log(apiEndpointWithLimit);

    fetch(apiEndpointWithLimit)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    document.title = "Posts";
    console.log("useEffect starting");
    getData();
  }, []);

  return (
    <>
      <Container className="overflow-hidden">
        <Row className="gy-5">
          {posts?.map(({ userId, id, title, body }) => (
            <Col>
              <Card key={id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/200" />
                <Card.Body>
                  <Card.Title className="text-truncate">{title}</Card.Title>
                  <Card.Text className="text-truncate">{body}</Card.Text>

                  <Button variant="primary">
                    <Link
                      style={{ color: "white" }}
                      to={`/posts/${id}`}
                      key={id}
                    >
                      Leer Post
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Posts;
