import React, { useState } from "react"
import { Alert, Card, Col, Collapse, Row } from "react-bootstrap"
import { LightBulb } from "../Icon/LightBulb"

const InfoCard = ({ infoType }) => {
  const [collapseOpen, setCollapseOpen] = useState(false)

  const collapseHandler = () => {
    setCollapseOpen((prev) => !prev)
  }
  return (
    <Row>
      <Col>
        <button
          className="btn btn-outline-warning mb-3"
          onClick={collapseHandler}
          aria-controls="info-text"
          aria-expanded={collapseOpen}
        >
          <LightBulb />
        </button>
        <Collapse in={collapseOpen}>
          <div id="info-text">
            <Alert variant="warning">{infoType.info}</Alert>
          </div>
        </Collapse>
      </Col>
    </Row>
  )
}

export default InfoCard
