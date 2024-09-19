import React, { useState } from "react"
import search from "../assets/search.svg"
import { Button, Col, Form, Row } from "react-bootstrap"
import InputGroup from "react-bootstrap/InputGroup"
import TaskList from "../Component/TaskList/TaskList"

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
            <Button variant="btn btn-primary" id="search-btn" onClick={handleSearch}>
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
