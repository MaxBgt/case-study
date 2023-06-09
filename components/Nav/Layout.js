import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
