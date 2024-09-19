import React from "react"
import { Col, Row } from "react-bootstrap"
import { Mark } from "../Icon/Mark"
import { Circle } from "../Icon/Circle"
import { Edite } from "../Icon/Edite"
import { Trash } from "../Icon/Trash"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { deleteTask } from "../../Store/TaskSlice"
import { useDispatch, useSelector } from "react-redux"

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()
  const deleteHandler = (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9747FF",
      cancelButtonColor: "#FF5757",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteTask(task.id))
          Swal.fire({
            title: "Deleted!",
            text: "Your Task has been deleted.",
            icon: "success"
          })
        } catch (error) {}
      }
    })
  }

  return (
    <Row
      className="align-items-center rounded-5 mx-2 my-3 p-1 px-4"
      style={{
        border: "1px solid rgba(117,117,117,77%) ",
        background: `${task.completed ? "rgba(206, 255, 218,51%)" : ""}`,
        height: "14rem"
      }}
    >
      <Col xs={2} className="d-flex justify-content-center align-items-center">
        <span>
          <button className="btn">{task.completed ? <Mark /> : <Circle />}</button>
        </span>
      </Col>
      <Col xs={8} className="p-3">
        <div className="d-flex flex-column task gap-2">
          {/* <h3 className="task-title">{task.title}</h3> */}
          {/* <p className="task-body">{task.description}</p> */}
          <h3 className="task-title">
            {task.todo && task.todo.length > 40 ? `${task.todo.slice(0, 40)}....` : task.todo}
          </h3>
          <p className="task-body">{task.todo}</p>
        </div>
      </Col>
      <Col xs={2}>
        <div className="d-flex flex-row flex-md-column justify-content-around gap-3">
          <span>
            <Link to={`/edite/${task.id}`}>
              <Edite />
            </Link>
          </span>
          <span>
            <button className="btn p-0 m-0" onClick={deleteHandler}>
              <Trash />
            </button>
          </span>
        </div>
      </Col>
    </Row>
  )
}

export default TaskItem
