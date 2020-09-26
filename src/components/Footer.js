import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {

	render() {
		return (
			<div className="App-footer">
				<Navbar bg="dark" variant="dark">
		          <Nav className="footer-content-block">
		          		<p className="nav-link-footer">Mob. : 9876543210</p>
		          		<p className="nav-link-footer">M. Collection & Fashion</p>
		          		<p className="nav-link-footer">Rosemound Road, London</p>
		          </Nav>
		        </Navbar>
	        </div>
        );
	}
	
}

export default Footer