import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
  <Navbar className={styles.nav} variant='dark'>

    <Nav className="bar">
      <Nav.Link href="#home">무료부트캠</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">FAQ</Nav.Link>
    </Nav>
  </Navbar>

    </>
  );
}

export default NavBar;