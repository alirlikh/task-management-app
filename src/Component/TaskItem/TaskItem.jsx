import React from "react"
import { Col, Row } from "react-bootstrap"
import { Mark } from "../Icon/Mark"
import { Circle } from "../Icon/Circle"
import { Edite } from "../Icon/Edite"
import { Trash } from "../Icon/Trash"
import { Link } from "react-router-dom"

const TaskItem = ({ task }) => {
  return (
    <Row
      className="align-items-center rounded-5 m-2 p-1"
      style={{
        border: "1px solid rgba(117,117,117,77%) ",
        background: `${task.completed ? "rgba(206, 255, 218,51%)" : ""}`
      }}
    >
      <Col xs={2} className="d-flex justify-content-center align-items-center">
        <span>
          <button className="btn">{task.completed ? <Mark /> : <Circle />}</button>
        </span>
      </Col>
      <Col xs={8} className="p-3">
        <div className="d-flex flex-column task">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-body">{task.description}</p>
        </div>
      </Col>
      <Col xs={2}>
        <div className="d-flex flex-row flex-md-column justify-content-around ">
          <span>
            <Link to={`/edite/${task.id}`}>
              <Edite />
            </Link>
          </span>
          <span>
            <Trash />
          </span>
        </div>
      </Col>
    </Row>
  )
}

export default TaskItem
