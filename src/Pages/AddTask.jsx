import React from "react"
import TaskBody from "../Component/Task-Body/TaskBody"
import { Col, Row } from "react-bootstrap"

const AddTask = () => {
  return (
    <Row className="p-4 justify-content-center">
      <Row className="w-100">
        <Col sm={12} md={10} className="mx-auto  ">
          <h2 className="text-cnter mt-2  mb-5 title-line pb-3">Create New Task</h2>
        </Col>
      </Row>
      <Col sm={8} md={8} className="mx-auto">
        <TaskBody />
      </Col>
    </Row>
  )
}

export default AddTask
