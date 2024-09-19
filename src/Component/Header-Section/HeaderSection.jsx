import React from "react"
import { Col, Row } from "react-bootstrap"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

const HeaderSection = () => {
  return (
    <Row className="my-4">
      <Col>
        <Link to={"/"} className="text-decoration-none text-dark">
          <span className="title">Task Management App</span>
        </Link>
      </Col>
      <Col className="d-flex justify-content-end">
        <img src={logo} alt="logo" />
      </Col>
    </Row>
  )
}

export default HeaderSection
