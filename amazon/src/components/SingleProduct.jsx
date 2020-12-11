import React from "react";
import "../styles/SingleProduct.css";
import { Container, Row, Col } from "react-bootstrap";

const SingleProduct = () => {
  return (
    <>
      <Container>
        <div className="product-container">
          <Row>
            <Col xs={11} md={4} lg={3}>
              <img src="https://placehold.it/90x90" />
            </Col>
            <Col xs={11} md={7} lg={8}>
              <Row>
                <h6>Product name</h6>
              </Row>
              <Row>
                <p>
                  Aliqua consequat eu est non minim labore ex enim nostrud
                  tempor dolor sint voluptate voluptate. Incididunt ipsum ea
                  enim cupidatat ut eu Lorem nostrud adipisicing ea nulla
                  laboris. 
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
