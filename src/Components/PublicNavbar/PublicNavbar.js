import React from "react";

import Navbar from "react-bootstrap/Navbar";

function PublicNavBar() {
  return (
    <div>
      <Navbar bg="success">
        <Navbar.Brand href="">
          <img
            src="/rps.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Rock Paper Scissors"
          />
          {/* <i width="30"
          height="30"
          className="fas fa-hand-rock d-inline-block align-top"
          alt="RPS logo"></i> */}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default PublicNavBar;
