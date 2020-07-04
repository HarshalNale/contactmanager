import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h1>
          <strong style={{color:'red'}}>Oops!</strong>{" "}
        </h1>
        <h3>
          <strong style={{color:'red'}}>404 Not Found</strong>{" "}
        </h3>
        <h6>Sorry, an error has occured, Requested page not found!</h6>
        <Link to="/">
          <span
            style={{
              color: "white",
              backgroundColor: "#428bca",
              padding: "4px",
              cursor: "pointer",
            }}
          >
            <i class="fas fa-home" />
            Take Me Home
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
};
