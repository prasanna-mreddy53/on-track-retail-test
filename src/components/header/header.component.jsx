import React, { useState } from "react";
import "./header.styles.scss";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const Header = ({ searchBooks }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <header className="App-header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">OnTrack Test</Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl
            type="text"
            onChange={handleInputChange}
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button
            variant="outline-light"
            onClick={() => searchBooks(searchValue)}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </header>
  );
};
export default Header;
