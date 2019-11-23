import React, { Component } from 'react';
import { MDBNavbar, MDBCollapse, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBContainer } from 'mdbreact';

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
            <header>
                <MDBNavbar style={{ backgroundColor: "#212121" }} dark expand="md" >
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <strong>To Do </strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggle} />
                        <MDBCollapse isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left style={{ color: "white" }} right>
                                <MDBNavItem>
                                    <div></div>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </header>
        )
    }
}

export default NavbarToDo;