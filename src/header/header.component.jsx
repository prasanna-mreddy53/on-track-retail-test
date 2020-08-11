import React from "react";
import "./header.styles.scss";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  return (
    <header className="App-header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">OnTrack</Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </header>
  );
}
export default Header;
