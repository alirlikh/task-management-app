import React, { useEffect, useState } from "react"
import { Button, Col, Row, Spinner } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { addTask, fetchOneTask, editTask } from "../../Store/TaskSlice"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useParams, useNavigate } from "react-router-dom"

const TaskBody = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, error, status } = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  const task = items.find((task) => task.id == id)

  // const [taskName, setTaskName] = useState(initialValue ? initialValue.title : "")
  const [taskName, setTaskName] = useState("")
  const [taskDesc, setTaskDesc] = useState("")

  useEffect(() => {
    if (!!id) {
      if (!task) {
        dispatch(fetchOneTask(id))
      } else {
        setTaskName(task.todo)
      }
    }
  }, [id, dispatch, task])

  const handleNameValue = (e) => {
    setTaskName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!!id) {
      const updatedTask = { id: task.id, todo: taskName, completed: false }
      dispatch(editTask(updatedTask))
        .then(() => {
          Swal.fire({
            title: "success!",
            text: "upadated successfully!",
            icon: "success"
          })
          navigate("/")
        })
        .catch((e) => {
          Swal.fire({
            title: "Error!",
            text: "Have Not Edited!",
            icon: "error"
          })
        })
    } else {
      dispatch(
        addTask({
          todo: taskName,
          completed: false,
          userId: Math.random()
        })
      ).then(() => {
        Swal.fire({
          title: "success!",
          text: "create the task is successfull!",
          icon: "success"
        })
        setTaskName("")
        navigate("/")
      })
    }
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
              className="input-border "
              required
              value={taskName}
              onChange={handleNameValue}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              className="input-border "
              placeholder="say something..."
              rows={5}
              required
              value={taskDesc}
              onChange={handleDescValue}
            />
          </Form.Group>
          <div className="col-12 col-md-6 mx-auto">
            <Button
              type="submit"
              className="my-5 w-100"
              disabled={status === "pending"}
              variant="purple"
            >
              {/* <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> */}
              {id ? "Edite" : "Create"}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default TaskBody
