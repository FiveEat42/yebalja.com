import PropTypes  from 'prop-types';
import Link from 'next/link'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Header />
                <Footer />
            </div>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;