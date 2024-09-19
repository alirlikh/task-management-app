import React from "react"
import TaskBody from "../Component/Task-Body/TaskBody"
import { Col, Row } from "react-bootstrap"

const EditeTask = () => {
  return (
    <Row className="p-4">
      <Col sm={8} md={8} className="mx-auto">
        <h2 className="text-cnter mt-2  mb-5 ">Edite</h2>
        <TaskBody />
      </Col>
    </Row>
  )
}

export default EditeTask
