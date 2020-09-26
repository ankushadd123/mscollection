import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './../images/logo.png';

class Header extends React.Component {

	render() {
		return (
				<Navbar bg="dark" variant="dark" className="App-header">
		          <Nav className="mr-auto">
		              <img src={logo} className="App-logo" alt="logo" />
		              <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
		              <Nav.Link className="nav-link" href="#about-us">About us</Nav.Link>
		              <Nav.Link className="nav-link" href="#features">Products</Nav.Link>
		              <Nav.Link className="nav-link" href="#pricing">Contact us</Nav.Link>
		          </Nav>
		        </Navbar>
        );
	}
	
}

export default Header