import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import TextLogo from "./TextLogo";
import NavBar from "./NavBar";
import TopButton from "./TopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <TextLogo />
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
