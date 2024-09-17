import React from "react"
import TaskItem from "../TaskItem/TaskItem"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const TaskList = ({ searchQuery }) => {
  const taskList = [
    {
      id: 1,
      title: "task1",
      description:
        "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
      completed: false
    },
    {
      id: 2,
      title: "task",
      description:
        "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
      completed: false
    },
    {
      id: 3,
      title: "task",
      description:
        "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
      completed: true
    },
    {
      id: 4,
      title: "task",
      description:
        "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
      completed: false
    },
    {
      id: 5,
      title: "task",
      description:
        "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
      completed: true
    }
  ]

  return (
    <>
      <h2 className="title m-3 p-1 mt-5 ml-4">Today's Task</h2>
      <Row className="flex-md-row ">
        {taskList
          .filter(
            (task) =>
              task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((task) => (
            <Col key={task.id} xs={12} md={6}>
              <TaskItem task={task} />
            </Col>
          ))}
        {/* <Button style={{ background: "rgb(151, 71, 255)" }} className="my-5 mx-3"> */}
        <Link
          to={"/create"}
          className="btn my-5 mx-3 text-white"
          style={{ background: "rgb(151, 71, 255)" }}
        >
          Create New Task
        </Link>
        {/* </Button> */}
      </Row>
    </>
  )
}

export default TaskList
