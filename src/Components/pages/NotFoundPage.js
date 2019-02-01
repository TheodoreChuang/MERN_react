import React from "react";
import NavBar from "../NavBar";

const NotFoundPage = () => {
  return (
    <div>
      <NavBar {...this.props} />
      <h1>404 Error</h1>
      <p>Page was not found</p>
    </div>
  );
};

export default NotFoundPage;
