import React, { useState } from "react"
import search from "../assets/search.svg"
import { Button, Col, Form, Row } from "react-bootstrap"
import InputGroup from "react-bootstrap/InputGroup"
import TaskList from "../Component/TaskList/TaskList"
import { Link } from "react-router-dom"

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const saveQuery = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = () => {
    setSearchQuery(searchValue)
  }

  return (
    <>
      <Row>
        <Col className="mx-3 mt-5">
          <InputGroup className="">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-btn"
              value={searchValue}
              onChange={saveQuery}
            />
            <Button
              variant="btn "
              style={{ background: "rgb(151, 71, 255)" }}
              id="search-btn"
              onClick={handleSearch}
            >
              <img src={search} alt="search" width={20} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <TaskList searchQuery={searchQuery} />
        <Row className="justify-content-center">
          <div className="d-flex">
            <Link
              to={"/create"}
              className="btn my-5 mx-3 text-white px-4 w-100"
              style={{ background: "rgb(151, 71, 255)" }}
            >
              <span>Create New Task</span>
            </Link>
          </div>
        </Row>
      </Row>
    </>
  )
}

export default Main
