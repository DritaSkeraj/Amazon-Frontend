import React from "react";
import "../styles/SingleProduct.css";
import { Container, Row, Col } from "react-bootstrap";

class SingleProduct extends React.Component {
  render(){
    return (
      <>
        <Container>
          <div className="product-container">
            <Row>
              <Col xs={11} md={4} lg={3}>
                <img src={this.props.obj.imageURL} />
              </Col>
              <Col xs={11} md={7} lg={8}>
                <Row>
                  <h6>{this.props.obj.name}</h6>
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

  }
 
};

export default SingleProduct;
