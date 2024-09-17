import React, { useState } from "react"
import search from "../assets/search.svg"
import { Button, Col, Form, Row } from "react-bootstrap"
import InputGroup from "react-bootstrap/InputGroup"
import TaskItem from "../Component/TaskItem/TaskItem"
import TaskList from "../Component/TaskList/TaskList"

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const saveQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    console.log(searchQuery)
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
              value={searchQuery}
              onChange={saveQuery}
            />
            <Button variant="outline-secondary" id="search-btn" onClick={handleSearch}>
              <img src={search} alt="search" width={20} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <TaskList searchQuery={searchQuery} />
      </Row>
    </>
  )
}

export default Main
