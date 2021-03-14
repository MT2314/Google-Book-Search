import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button} from 'react-bootstrap'


const navigation = () => {

    return (
        <div>

            <Navbar collapseOnSelect expand="lg">
                <h1 href="/" style = {{textAlign:'center', fontSize:'8em', width:'100%'}}>Book Search</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mt-3 ml-3" style={{position:"absolute", top:0, left:0}}>
                        <Link className = "navlink mr-2" to="/"><Button variant="outline-primary" size="lg"> Search </Button></Link>
                        <Link className = "navlink" to="/saved"><Button variant="outline-primary" size="lg">Saved</Button> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default navigation