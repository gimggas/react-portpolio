import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutSizingExample() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={6} md={4}>
          <p>베르크</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_01.png"}
              style={{
                width: " 33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_02.png"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_03.png"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>

        <Col xs={6} md={4}>
          <p>수수커피</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_04.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_05.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_06.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <p>알렉스 더 커피</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_07.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_08.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_09.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <p>커넥츠</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_10.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_11.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_12.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <p>펠트</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_13.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_14.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_15.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <p>55˚ 커피</p>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_16.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_17.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/hot_18.webp"}
              style={{
                width: "33.333333%",
              }}
            ></img>
          </a>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      {/* <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      {/* <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row> */}
    </Container>
  );
}

export default AutoLayoutSizingExample;
