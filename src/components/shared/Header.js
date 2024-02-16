import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'burlywood',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-1'>
			<Link to='create-character' style={linkStyle}>
				Create Character
			</Link>
		</Nav.Item>
		<Nav.Item className='m-1'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-1'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-1'>
			<Link to='sign-up' style={linkStyle}> Sign Up </Link>
        </Nav.Item>
        <Nav.Item className='m-1'>
			<Link to='sign-in' style={linkStyle}> Sign In </Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-1'>
			<Link to='/' style={linkStyle}> Home </Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='light' expand='md'>
		<Navbar.Brand className='m-2'>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
