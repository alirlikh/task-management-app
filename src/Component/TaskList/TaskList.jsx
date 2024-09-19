import React, { useEffect } from "react"
import TaskItem from "../TaskItem/TaskItem"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchTasks } from "../../Store/TaskSlice"

const TaskList = ({ searchQuery }) => {
  // const taskList = [
  //   {
  //     id: 1,
  //     todo: "task1",
  //     todo: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     todo: "task",
  //     todo: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  //     completed: false
  //   },
  //   {
  //     id: 3,
  //     todo: "task",
  //     todo: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  //     completed: true
  //   },
  //   {
  //     id: 4,
  //     todo: "task",
  //     todo: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  //     completed: false
  //   },
  //   {
  //     id: 5,
  //     todo: "task",
  //     todo: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
  //     completed: true
  //   }
  // ]

  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.items)
  const taskStatus = useSelector((state) => state.tasks.status)
  const error = useSelector((state) => state.tasks.error)

  useEffect(() => {
    // if (taskStatus === "idle")
    dispatch(fetchTasks())
    console.log("call fetch")
  }, [dispatch])

  if (taskStatus === "loading") return <div className="text-center pt-5 fw-1 fs-3 ">loading...</div>
  if (taskStatus === "error") return <div className="text-center pt-5 fw-1 fs-3 ">{error}</div>

  return (
    <>
      <h2 className="title m-3 p-1 mt-5 ml-4">Today's Task</h2>
      <Row className="flex-md-row ">
        {tasks
          ?.filter((task) =>
            // task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            // task.description.toLowerCase().includes(searchQuery.toLowerCase())

            searchQuery ? task.todo.toLowerCase().includes(searchQuery.toLowerCase()) : task
          )
          .map((task) => (
            <Col key={task.id} xs={12} md={6}>
              <TaskItem task={task} />
            </Col>
          ))}
        <Link
          to={"/create"}
          className="btn my-5 mx-3 text-white"
          style={{ background: "rgb(151, 71, 255)" }}
        >
          Create New Task
        </Link>
      </Row>
    </>
  )
}

export default TaskList
