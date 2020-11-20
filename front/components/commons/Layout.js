import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import LogoBar from "./LogoBar";
import NavBar from "./NavBar";
import TopButton from "./TopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <LogoBar />
        <NavBar />
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
