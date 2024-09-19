import React, { useEffect } from "react"
import TaskItem from "../TaskItem/TaskItem"
import { Alert, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchTasks } from "../../Store/TaskSlice"

const TaskList = ({ searchQuery }) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.items)
  const taskStatus = useSelector((state) => state.tasks.status)
  const error = useSelector((state) => state.tasks.error)

  const filtredTask = tasks.filter((task) =>
    //   // task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   // task.description.toLowerCase().includes(searchQuery.toLowerCase())
    searchQuery ? task.todo.toLowerCase().includes(searchQuery.toLowerCase()) : task
  )

  useEffect(() => {
    // if (taskStatus === "idle")
    dispatch(fetchTasks())
  }, [dispatch])

  if (taskStatus === "loading") return <div className="text-center pt-5 fw-1 fs-3 ">loading...</div>
  if (taskStatus === "failed") return <div className="text-center pt-5 fw-1 fs-3 ">{error} </div>

  return (
    <>
      <Row>
        <Col>
          <h2 className="title p-1 mt-5 ml-5">Today's Task</h2>
        </Col>
      </Row>

      <Row className="flex-md-row justify-content-center">
        {filtredTask && filtredTask.length > 0 ? (
          filtredTask.map((task) => (
            <Col key={task.id} xs={12} md={6} className="d-flex">
              <TaskItem task={task} />
            </Col>
          ))
        ) : (
          <Alert variant="danger" className="mb-0">
            <span>Oops! Your Task Not Found.</span>
          </Alert>
        )}
      </Row>
    </>
  )
}

export default TaskList
