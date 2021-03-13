import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'


// Pages
import Search from "../pages/Search";
import Saved from "../pages/Saved";

const navigation = () => {

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Book Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className = "navlink" to="/">Search</Link>
                        <Link className = "navlink" to="/saved">Saved </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default navigation