import React, { useState } from "react"
import { Search } from "../Component/Icon/Search"
import { Button, Col, Form, Row } from "react-bootstrap"
import InputGroup from "react-bootstrap/InputGroup"
import TaskList from "../Component/TaskList/TaskList"
import { Link } from "react-router-dom"
import { AppInfo } from "../Constant/Constant"
import InfoCard from "../Component/InfoCard/InfoCard"

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
      <InfoCard infoType={AppInfo} />
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
            <Button variant="purple" id="search-btn" onClick={handleSearch}>
              <Search width={20} height={20} />
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
              className="btn btn-purple my-5 mx-3 text-white px-4 w-100"
              aria-label="go to create task page"
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
