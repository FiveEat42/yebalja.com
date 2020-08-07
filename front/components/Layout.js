import React from 'react';
import PropTypes  from 'prop-types';
import Footer from "./Footer";
import TextLogo from "./TextLogo";
import NavBar from "./NavBar"

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <TextLogo/>
        <NavBar />
          {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;