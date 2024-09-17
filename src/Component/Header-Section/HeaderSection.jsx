import React from "react"
import { Col, Row } from "react-bootstrap"
import logo from "../../assets/logo.svg"

const HeaderSection = () => {
  return (
    <Row className="my-4">
      <Col>
        <span className="title">Task Management App</span>
      </Col>
      <Col className="d-flex justify-content-end">
        <img src={logo} alt="logo" />
      </Col>
    </Row>
  )
}

export default HeaderSection
