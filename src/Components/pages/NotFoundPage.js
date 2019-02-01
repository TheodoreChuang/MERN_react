import React from "react";
import NavBar from "../NavBar";

const NotFoundPage = props => {
  return (
    <div>
      <NavBar {...props} />
      <h1>404 Error</h1>
      <p>Page was not found</p>
    </div>
  );
};

export default NotFoundPage;
