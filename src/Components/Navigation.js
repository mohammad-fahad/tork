import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Nav activeKey="/home" className="bg-light">
        <Nav.Item className="mr-5">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item className="mr-5">
          <Link to="/get">Get</Link>
        </Nav.Item>
        <Nav.Item className="mr-5">
          <Link to="/post">Post</Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
