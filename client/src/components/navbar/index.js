import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, Collapse, NavbarToggler, NavbarBrand, Container } from 'reactstrap';

class NavbarToDo extends Component {

    state = {
        isOpen: false
    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/#">TO DO LIST</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/#">
                                        Completed Tasks
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarToDo;