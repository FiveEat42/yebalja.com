import PropTypes  from 'prop-types';
import Link from 'next/link'
import Footer from "./Footer";
import TextLogo from "./TextLogo";
import Jumbotron from "./Jumbotron";

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <TextLogo/>
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