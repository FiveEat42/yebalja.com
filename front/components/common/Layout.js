import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopButton from "./TopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        {children}
        <Footer />
        <TopButton />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
