import React, { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Form from "react-bootstrap/Form"

const TaskBody = ({ initialValue }) => {
  const [taskName, setTaskName] = useState(initialValue ? initialValue.title : "")
  const [taskDesc, setTaskDesc] = useState(initialValue ? initialValue.description : "")

  const handleNameValue = (e) => {
    setTaskName(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleDescValue = (e) => {
    setTaskDesc(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task"
              style={{ border: "1px solid rgba(117,117,117,77%) " }}
              required
              value={taskName}
              onChange={handleNameValue}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="say something..."
              rows={5}
              style={{ border: "1px solid rgba(117,117,117,77%) " }}
              required
              value={taskDesc}
              onChange={handleDescValue}
            />
          </Form.Group>
          <div className="col-12 col-md-6 mx-auto">
            <Button
              type="submit"
              style={{ background: "rgb(151, 71, 255)" }}
              className="my-5 w-100"
            >
              {initialValue ? "Edite" : "Create"}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default TaskBody
